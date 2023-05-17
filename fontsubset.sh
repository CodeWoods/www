#!/bin/bash
# @credit: https://github.com/black7375/Readable_Font/blob/master/Resource/font/fontsubset.sh
rm -rf ./public/fonts/subset/*.woff2
rm -f ./fontsubset.txt
# https://blog.miniasp.com/post/2019/01/02/Common-Regex-patterns-for-Unicode-characters
rg -e '[\u4e00-\u9fff\u3400-\u4DBF\uF900-\uFAFF\uFE30-\uFE4F\u3000\u3001-\u303F]' -oN --no-filename|sort|uniq|tr -d '\n' > fontsubset.txt

font_subset() {
  fontFile="$1"
  fontName="$2"
  pyftsubset "$fontFile" \
    --flavor="woff2" \
    --with-zopfli \
    --output-file="./public/fonts/subset/$fontName.woff2" \
    --text-file="fontsubset.txt" \
    --layout-features='*' \
    --glyph-names \
    --symbol-cmap \
    --legacy-cmap \
    --notdef-glyph \
    --notdef-outline \
    --recommended-glyphs \
    --name-legacy \
    --no-subset-tables+=FFTM,feat,morx \
    --name-IDs='*' \
    --name-languages='*'
}
# --drop-tables= or --no-subset-tables+=FFTM,feat,morx

echo -e "--------------------"
echo -e " Font Subset woff2"
echo -e "--------------------\n"

echo -e "\n--------------------"
echo -e "NEEDS"
echo -e "pip install fonttools"
echo -e "pip install zopfli => --with-zopfli for woff"
echo -e "pip install brotli => for woff2"

echo -e "\n--------------------"
echo -e "TTF Files Trans\n"

echo -e "LXGW WenKai TC / 霞鶩文楷 TC"
font_subset ./src/styles/fonts/LXGWWenKaiMonoTC-Regular.ttf LXGWWenKaiMonoTC-Regular
font_subset ./src/styles/fonts/LXGWWenKaiMonoTC-Bold.ttf LXGWWenKaiMonoTC-Bold

echo -e "\n--------------------"
echo -e " Font Subset END"
echo -e "--------------------\n"
