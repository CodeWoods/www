---
title: get_recent_tweets.py
pubDateTime: 2023-02-17
---

取得推特帳號最新推文。

```python
#!/usr/bin/env python3
'''
prerequisites:
- Python 3.x distribution
- Twitter API Keys and Tokens
- Tweepy ( https://github.com/tweepy/tweepy )
- TWITTER_HANDLES.txt
'''
import csv, json, os, sys, time, tweepy
#from tweepy.parsers import JSONParser

# CONFIGURATION
twitter_users_file = open('TWITTER_HANDLES.txt', 'r').read().splitlines()
twitter_users_list = [l for l in twitter_users_file if l.strip()]
twitter_users_list = [l for l in twitter_users_list if not l.startswith('#')]
recent_tweets = 100  # Get a User's Most Recent Tweets (200 is the maximum allowed count)

def setup_twit_oauth():
    '''Setup Twitter authentication ( https://apps.twitter.com/ )

    Return:
        tweepy.OAuthHandler object
    '''
    try:
        consumer_key = os.environ['TWITTER_CONSUMER_KEY']
        consumer_secret = os.environ['TWITTER_CONSUMER_SECRET']
        access_token = os.environ['TWITTER_ACCESS_TOKEN']
        access_secret = os.environ['TWITTER_ACESS_SECRET']
    except KeyError:
        print('\033[1;41mTWITTER_* environment variable not set \033[0m\n')
        sys.exit(1)  # 0   No problems occurred. 1   Generic error code.
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_secret)
    return auth

def setup_twit_client():
    '''Setup Twitter API client

    Return:
        tweepy.API object
    '''
    auth = setup_twit_oauth()
    client = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True) # parser=JSONParser()
    return client

def write_json_file(status, outfile):
    json.dump(status, outfile)

def write_tsv_file(rows, outfile):
    t_writer = csv.writer(outfile, delimiter='\t')
    t_writer.writerows(rows)

def retrieve_user_tweets(twitter_user):
    try:
        client = setup_twit_client()
        status = client.user_timeline(screen_name=twitter_user, count=recent_tweets, tweet_mode='extended')

        # create array of tweet information: datetime, text, tweet url
        rows = []
        for tweet in status:
            # Py3.6+: f'https://twitter.com/{tweet.user.id_str}/status/{tweet.id_str}'
            t_url = 'https://twitter.com/{}/status/{}'.format(tweet.user.screen_name, tweet.id_str)
            rows.append([tweet.created_at, tweet.full_text, t_url])

        # write data to {JSON, CSV/TSV} file
        filename_pattern = '{f}_tweets.{ext}'
        with open(filename_pattern.format(f=twitter_user, ext='json'), 'w') as outfile:
            write_json_file(status[0]._json, outfile)  # w/o JSONParser()
        with open(filename_pattern.format(f=twitter_user, ext='tsv'), 'w') as outfile:
            write_tsv_file(rows, outfile)

        # show progress
        print('[\033[32m+\033[0m] {}'.format(twitter_user))
    except tweepy.TweepError as err:
        # https://developer.twitter.com/en/docs/basics/{response-codes, rate-limiting}
        print('\x1b[1;41m[x] {} -> {}\x1b[0m'.format(twitter_user, err.reason))

def main():
    start_time = time.time()
    for i, user in enumerate(twitter_users_list):
        retrieve_user_tweets(twitter_users_list[i])
        i+=1
    print('Done! {0:.3f}s'.format(time.time() - start_time))

if __name__ == '__main__':
    main()
```
