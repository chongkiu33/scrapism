import requests
from bs4 import BeautifulSoup

url1 = "https://chinadigitaltimes.net/"

r1 =requests.get(url1)
soup1 = BeautifulSoup(r1.text, "html.parser")

items1 = soup1.select(".excerpt entry-summary")

#f1 = open('newfile.txt','w')

for item in items1:
    print(item.text.strip())
    
    #f1.write(item.text.strip())

#chinadaily

url2 = "https://www.chinadaily.com.cn/"

r2 =requests.get(url2)
soup2 = BeautifulSoup(r2.text, "html.parser")

items2 = soup2.select("a")

f2 = open('newfile.txt','w')

#for item in items2:
    #print(item.text.strip())
    
    #f1.write(item.text.strip())