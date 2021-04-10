var tipuesearch = {"pages": [{'title': '首頁', 'text': '成員名單:尚未確認 \n 已成功將SSH建立出來', 'tags': '', 'url': '首頁.html'}, {'title': '問題集中串', 'text': '此串會將問題的時間以及解決過程紀錄出來 \n', 'tags': '', 'url': '問題集中串.html'}, {'title': '課程內容', 'text': '', 'tags': '', 'url': '課程內容.html'}, {'title': '第一週', 'text': '', 'tags': '', 'url': '第一週.html'}, {'title': '第二週', 'text': 'onshape 一個將工具放在網路上使用 \n 新的網站是可以使用https://localhost:9443但如果在其他環境下則需要自己去找IPV6的位置才能完成同步協調 \n', 'tags': '', 'url': '第二週.html'}, {'title': '第三週', 'text': '老師將cmsimde更新兩個功能 \n 1.acp.bat\xa0 \xa0add commit push 一次推完 \n 2.cms.bat\xa0 直接打開cmsimde \n 以及一些cmsimde的更新以及教導如何更新cmsimde \n', 'tags': '', 'url': '第三週.html'}, {'title': '第四週', 'text': '這週開始進行分組活動並開始教導如何從網頁上的資料截下來並使用程式的方法,再來開始要進行個實驗室網站的時程 \n import requests\nimport bs4\n# for os.environ and os.system()\nimport os\n# for geting html file path\nimport pathlib\n \n# for pythn 3.9\nproxy = \'http://[2001:288:6004:17::69]:3128\'\n \nos.environ[\'http_proxy\'] = proxy \nos.environ[\'HTTP_PROXY\'] = proxy\nos.environ[\'https_proxy\'] = proxy\nos.environ[\'HTTPS_PROXY\'] = proxy\n \n\'\'\'\nurl:  \'class_ajax.php\',\ndata: { pselyr: pselyr, pselclss: pselclss\n\'\'\'\nsemester = \'1092\'\nclassno = \'42311\'\ncolumn = True\n \nif semester == None:\n    semester = \'1091\'\nif classno == None:\n    # 42311 is 設一甲\n    classno = \'42311\'\n\nheaders = {\'X-Requested-With\': \'XMLHttpRequest\'}\n \nurl = \'https://qry.nfu.edu.tw/class_ajax.php\'\npost_var = {\'pselyr\': semester, \'pselclss\': classno}\n \nresult = requests.post(url, data = post_var, headers = headers)\n \nsoup = bs4.BeautifulSoup(result.content, \'lxml\')\n \n# 先除掉所有 anchor\nfor a in soup.findAll(\'a\'):\n    # bs3 語法\n    #a.replaceWithChildren()\n    # bs4 語法, 將標註與內容拆開\n    a.unwrap()\n \n# 根據輸出設定, 取出 class=\'tbcls\' 的 table 資料\ntable = soup.find(\'table\', {\'class\': \'tbcls\'})\n \n# 重建 table, 設定邊線為 1 pixel\noutput = "<table border=\'1\'>"\n \nfor i in table.contents:\n    # 利用 replace 復原  \n    output += str(i).replace("&nbsp", " \xa0 ")\noutput += "</table>"\n# print(output)\n# 將 output 寫入 w1_class_local.html\nwith open("w1_class_local.html", "w", encoding="utf-8") as file:\n    file.write(output)\n# 利用 os.system() 以 default browser 開啟 w1_class_local.html\nfilePath = pathlib.Path(__file__).parent.absolute()\n#print(filePath)\n# set firefox as default browser and start url to open html file\nos.system("start file:///" + str(filePath) + "\\\\w1_class_local.html") \n 在這之中其中有一行,是因為使用著習慣設定會在空白出現&nbsp 而將那一行更改成 \n output += str(i).replace("&amp;nbsp", " &nbsp; ") \n 即可 \n 最後成品網頁 \n \n \n', 'tags': '', 'url': '第四週.html'}, {'title': '一般步驟放置區', 'text': '此串會放置一些比較統一化的指令串 \n', 'tags': '', 'url': '一般步驟放置區.html'}, {'title': '建立SSH的方法 使用非設計系網路的環境下', 'text': '可參考資料 http://mde.tw/cp2020/content/SSH.html \n 以下將會詳細的解說步驟一步一步的解說設定自己的PPK \n \n \n 1.首先先在CMD上面輸入sh \n 2.在依照格式 ssh-keygen -t rsa -b -C "隨便打"\xa0 \xa0 (有大小寫區分) \n 3.再將star_ipv6.bat裡新增\xa0set GIT_SSH=%Disk%:\\putty\\plink.exe 後儲存 \n 4.打開puttygen.exe 按下 generate \n 5.等待讀條玩按下save private key 並將檔案儲存到 home_ipv6/.ssh裡 \n 6.將中間裡的一大串複製到github的SSH and GPG keys 裡先New SSH key並將那一大堆亂碼輸入進去 \n \n \n \n \n 7.打開putty.exe並新增github.com(如下圖) \n \n \n (提醒:在設計系網路以外不用設定PROXY) \n 8.再把SSH的+打開會有Auth裡面會有一行選擇KEY的格子點選Browse選擇剛剛在home_ipv6/.ssh裡建的KEY \n \n 9.回到Session按下save之後再按下open之後就會出現如下圖若顯示如下圖則表示成功 \n \n 10.慢慢享受不用打帳密的爽感吧.... \n \n', 'tags': '', 'url': '建立SSH的方法 使用非設計系網路的環境下.html'}, {'title': '更新cmsimde的方法', 'text': '1.先確認好最新的版本可從已作好的同學或老師的倉儲取的 \n 2.將目錄切換至cmsimde \n \xa0通常為 \n cd tmp \n cd wcm2021 \n cd cmsimde \n 3.再來先把新的東西pull下來 \n git pull \n 4.再將版本checkout成最新的版本 \n git checkout 版本號 \n 基本有出現就能完成更新cmsimde了 \n 順帶一題 大部分的推上去無綠勾勾也都是cmsimde版本混亂的原因而版本混亂也能這樣解決喔 \n', 'tags': '', 'url': '更新cmsimde的方法.html'}, {'title': '打開網站的方法(搬運資料)', 'text': '將裡面cp2020更改成你的資料名即可 \n 1.切換至cp2020裡的cmsimde並用python啟動wsgi.py \n 2.然後將網址複製到遊覽器上(預設密碼為:admin) \n \n push的方法 \n 1.git add . \n 2.git commit -m "隨便打" \n 3.git push \n 之後輸入github的帳密即可push了 \n \n', 'tags': '', 'url': '打開網站的方法(搬運資料).html'}, {'title': 'heroku 連結遠端方法', 'text': '步驟一: \xa0 ( 建立 Heroku 帳號 ) 進入 \xa0 https://heroku.com , 利用學校配發的 @gm 登記一個 Heroku 帳號, 關鍵在於密碼設定必須要至少 8 個字元, 且字元中必須包含符號, 英文字母及數字,\xa0 並且登記後要進入 @gm 帳號進行確認後才能開通 Heroku 帳號. \n 完成帳號登記後, 必須知道目前 Heroku 只允許免費建立五個應用程式, 且每個程式的最大容量為 500MB. \n 步驟二: \xa0 ( 建立 Heroku app ) 登入 Heroku 後, 先以 s + 學號 建立第一個 app, 完成後, 將可至 https://s學號.herokuapp.com 連線取得網站最初內容. \n 步驟三: \xa0 (下載 Heroku CLI) 從 \xa0 http://a.kmol.info:88/heroku.7z \xa0 下載 Heroku cli 程式檔案, 解開至隨身碟 Y: 所在位置或者是 Hybrid 設定的位置. \n 步驟四: \xa0 ( 修改命令搜尋路徑 ) 修改隨身系統的啟動批次檔案, 讓 Windows 的命令視窗中可以執行 heroku.exe, 或者稱作"設法將 heroku.exe 所在目錄位置, 設為 Windows 搜尋路徑之一". \n 重新啟動已經納入可執行 heroku.exe 的隨身碟 start_ipv6.bat 或 start_ipv4.bat \n 步驟五: \xa0 ( 測試 heroku 執行 ) 測試是否能夠在修改後的命令列中執行 heroku.exe, 輸入 heroku version 若回應所使用的版本表示上述路徑設定已經成功. \n 步驟六: \xa0 ( 設定 heroku 代理主機 ) 先前我們已經知道網路的應用包含 client 與 server, 不同 client 採用不同的 proxy 設定與 server 連線, 其中 firefox 作為 WWW 網路協定的 client, 有其自己的網路 Proxy 設定, 也可以直接使用操作系統的 Proxy 設定. \n Chrome 作為 WWW 網路協定的 client, 目前 Windows 下的最新版, 只能使用操作系統的 Proxy 設定. \n 而 git 作為 git client 與 github server 連線的 Proxy 設定, 則寫在 y:\\home_ipv6 下的 .giconfig 中,\xa0 以 git config --global http.proxy "http://your_proxy:port" 進行設定. \n 相同的道理 heroku cli 作為 \xa0 https://heroku.com \xa0 伺服器的 client 端, 也有其 Proxy 的設定方式, 也就是在 start_ipv6.bat 中加入: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n REM  for   heroku login \n set HTTP_PROXY=http: //[2001:288:6004:17::53]:3128 \n set HTTPS_PROXY=http: //[2001:288:6004:17::53]:3128 \n \n \n \n \n \n \n \n 步驟七: \xa0 ( 設定同步倉儲 ) 針對利用 Heroku 同步 Github Pages 上的網站內容, 只需要透過 git remote add (Heroku 指令為 heroku git:remote -a heroku_倉儲_名稱, 之後只要在 heroku login 狀態下, 可以直接利用 git push) 在近端設定一個連線到 Heroku 倉儲的代號, 就能在每次更新 Github Pages 倉儲後, 再將內容同步至 Heroku. 網際內容管理課程將使用兩種 Heroku app 設定, 也就是靜態網頁與動態網頁: \n 靜態網頁 - 採用 php 方式部署, 讓 Heroku 將靜態網頁視為 PHP 程式, 利用 index.php 跳轉到 index.html \n 動態網頁 - 讓 Heroku 執行 cmsimde/wsgi.py 的方式進行雲端伺服. \n 步驟八: \xa0 ( 以 git 進行提交推送 ) 利用 heroku git:remote -a 設定的同步倉儲其推送名稱內定為 "heroku", 使用者只要使用 git push heroku 就可以將改版內容推送到對應的 Heroku app 倉儲. \n 指令操作步驟: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n # 以 interactive 模式登入 Heroku, 完成後產生 y:\\home_ipv6\\_netrc \n heroku login  - i \n # 針對已經登入的 Heroku 帳號下的 taiwan-01 app, 設為此倉儲的 remote 同步倉儲, 且在倉儲中會自建名稱為 heroku 的 remoate site. \n heroku git:remote  - a taiwan - no1 \n \n \n \n \n \n \n \n 上述步驟完成後的 Heroku 網站: \xa0 https://taiwan-no1.herokuapp.com \n \n ----------------------------上述為老師的步驟教學--------------------------------------- \n 接下來會在下面去解說實際上可能會遇到的問題 \n 路徑問題 \n 首先是heroku檔案的位置路徑必須是正確的只要位置不對啟動程式無法透過路徑找到heroku的執行檔, \n 這時打有關heroku的指令都會顯示:\xa0 heroku不是內部指令的提示\xa0 \n \n 從圖中可以看到新增\xa0 \n set path_heroku=%Disk%:\\heroku\\bin;\n \n \n 此行就是指在開啟時設定heroku路徑的位置去抓出heroku檔案的指令 \n \n set HTTP_PROXY=http://[2001:288:6004:17::53]:3128\nset HTTPS_PROXY=http://[2001:288:6004:17::53]:3128 \n \n 再來這兩行則是在進行等等heroku登陸的Proxy的設定 \n \n 最後下面的\xa0 \n path=%Disk%:;%path_python%;%path_portablegit%;%path_heroku%;%path%; \n 其中的%path_heroku%;就是將路使用這些路徑,第一行是設定路徑而這行是使用設定的路徑 \n \n ------------------------------------------------------------------------------------------------ \n \n 等上述路線都確認無誤後即可測試heroku version如有出現版本號則表示成功 \n \n \n 再來照著步驟登陸後切換到自己的倉儲下輸入\xa0 heroku git:renite -a 自己設定的heroku app名稱 \n 出現藍字就表示成功 \n \n \n', 'tags': '', 'url': 'heroku 連結遠端方法.html'}]};