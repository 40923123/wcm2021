var tipuesearch = {"pages": [{'title': '首頁', 'text': '成員名單:尚未確認 \n 已成功將SSH建立出來', 'tags': '', 'url': '首頁.html'}, {'title': '問題集中串', 'text': '此串會將問題的時間以及解決過程紀錄出來 \n', 'tags': '', 'url': '問題集中串.html'}, {'title': '課程內容', 'text': '', 'tags': '', 'url': '課程內容.html'}, {'title': '第一週', 'text': '', 'tags': '', 'url': '第一週.html'}, {'title': '第二週', 'text': 'onshape 一個將工具放在網路上使用 \n 新的網站是可以使用https://localhost:9443但如果在其他環境下則需要自己去找IPV6的位置才能完成同步協調 \n', 'tags': '', 'url': '第二週.html'}, {'title': '第三週', 'text': '老師將cmsimde更新兩個功能 \n 1.acp.bat\xa0 \xa0add commit push 一次推完 \n 2.cms.bat\xa0 直接打開cmsimde \n 以及一些cmsimde的更新以及教導如何更新cmsimde \n', 'tags': '', 'url': '第三週.html'}, {'title': '第四週', 'text': '這週開始進行分組活動並開始教導如何從網頁上的資料截下來並使用程式的方法,再來開始要進行個實驗室網站的時程 \n import requests\nimport bs4\n# for os.environ and os.system()\nimport os\n# for geting html file path\nimport pathlib\n \n# for pythn 3.9\nproxy = \'http://[2001:288:6004:17::69]:3128\'\n \nos.environ[\'http_proxy\'] = proxy \nos.environ[\'HTTP_PROXY\'] = proxy\nos.environ[\'https_proxy\'] = proxy\nos.environ[\'HTTPS_PROXY\'] = proxy\n \n\'\'\'\nurl:  \'class_ajax.php\',\ndata: { pselyr: pselyr, pselclss: pselclss\n\'\'\'\nsemester = \'1092\'\nclassno = \'42311\'\ncolumn = True\n \nif semester == None:\n    semester = \'1091\'\nif classno == None:\n    # 42311 is 設一甲\n    classno = \'42311\'\n\nheaders = {\'X-Requested-With\': \'XMLHttpRequest\'}\n \nurl = \'https://qry.nfu.edu.tw/class_ajax.php\'\npost_var = {\'pselyr\': semester, \'pselclss\': classno}\n \nresult = requests.post(url, data = post_var, headers = headers)\n \nsoup = bs4.BeautifulSoup(result.content, \'lxml\')\n \n# 先除掉所有 anchor\nfor a in soup.findAll(\'a\'):\n    # bs3 語法\n    #a.replaceWithChildren()\n    # bs4 語法, 將標註與內容拆開\n    a.unwrap()\n \n# 根據輸出設定, 取出 class=\'tbcls\' 的 table 資料\ntable = soup.find(\'table\', {\'class\': \'tbcls\'})\n \n# 重建 table, 設定邊線為 1 pixel\noutput = "<table border=\'1\'>"\n \nfor i in table.contents:\n    # 利用 replace 復原  \n    output += str(i).replace("&nbsp", " \xa0 ")\noutput += "</table>"\n# print(output)\n# 將 output 寫入 w1_class_local.html\nwith open("w1_class_local.html", "w", encoding="utf-8") as file:\n    file.write(output)\n# 利用 os.system() 以 default browser 開啟 w1_class_local.html\nfilePath = pathlib.Path(__file__).parent.absolute()\n#print(filePath)\n# set firefox as default browser and start url to open html file\nos.system("start file:///" + str(filePath) + "\\\\w1_class_local.html") \n 在這之中其中有一行,是因為使用著習慣設定會在空白出現&nbsp 而將那一行更改成 \n output += str(i).replace("&amp;nbsp", " &nbsp; ") \n 即可 \n 最後成品網頁 \n \n \n', 'tags': '', 'url': '第四週.html'}, {'title': '一般步驟放置區', 'text': '此串會放置一些比較統一化的指令串 \n', 'tags': '', 'url': '一般步驟放置區.html'}, {'title': '建立SSH的方法', 'text': '可參考資料 http://mde.tw/cp2020/content/SSH.html \n 以下將會詳細的解說步驟一步一步的解說設定自己的PPK', 'tags': '', 'url': '建立SSH的方法.html'}, {'title': '更新cmsimde的方法', 'text': '1.先確認好最新的版本可從已作好的同學或老師的倉儲取的 \n 2.將目錄切換至cmsimde \n \xa0通常為 \n cd tmp \n cd wcm2021 \n cd cmsimde \n 3.再來先把新的東西pull下來 \n git pull \n 4.再將版本checkout成最新的版本 \n git checkout 版本號 \n 基本有出現就能完成更新cmsimde了 \n 順帶一題 大部分的推上去無綠勾勾也都是cmsimde版本混亂的原因而版本混亂也能這樣解決喔 \n', 'tags': '', 'url': '更新cmsimde的方法.html'}, {'title': '打開網站的方法(搬運資料)', 'text': '將裡面cp2020更改成你的資料名即可 \n 1.切換至cp2020裡的cmsimde並用python啟動wsgi.py \n 2.然後將網址複製到遊覽器上(預設密碼為:admin) \n \n push的方法 \n 1.git add . \n 2.git commit -m "隨便打" \n 3.git push \n 之後輸入github的帳密即可push了 \n \n', 'tags': '', 'url': '打開網站的方法(搬運資料).html'}]};