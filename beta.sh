#!/bin/bash
#

#=================================================
#	Description: 前端项目部署脚本
#	Version: 1.0.0
#	Author: linchengzzz
#	Mail: 1139489076@qq.com
#=================================================

Green_font_prefix="\033[32m"
Red_font_prefix="\033[31m"
Font_color_suffix="\033[0m"

Info="${Green_font_prefix}[信息]${Font_color_suffix}"
Error="${Red_font_prefix}[错误]${Font_color_suffix}"
Tip="${Green_font_prefix}[注意]${Font_color_suffix}"

sh_ver="1.0.0"

# 项目编译
beta_build() {
    cd /home/front.web/${1}.webapp
    git pull
    git checkout $2
    git pull
    echo -e "\n${Tip}: 项目编译中, 请稍候... "
    npm run beta
    rm -rf /var/www/$1/public/static
    cp -R dist/* /var/www/$1/public/
    cowsay `echo -e "${Info}: 项目部署成功 !!! "`
    echo
}

clear
echo -e "
    \n\n\t\t ────── 前端项目部署${Red_font_prefix}[v${sh_ver}]${Font_color_suffix} ────── \t\t\n\n
───────────────────

${Green_font_prefix}1${Font_color_suffix}. 货圈全 -- H5

${Green_font_prefix}2${Font_color_suffix}. 神批 -- H5

${Green_font_prefix}3${Font_color_suffix}. Ares 管理系统

────────────────────
"
read -p " 请输入要上线的项目 [1-3]: " num
echo
read -p " 请输入要部署的分支: " branch
echo

case ${num} in
    1)
        beta_build h5 ${branch}
        ;;
    2)
        beta_build merchant ${branch}
        ;;
    3)
        beta_build ares ${branch}
        ;;
    *)
        clear
        echo -e "${Error}:请输入正确数字 [1-3]"
        ;;
esac
