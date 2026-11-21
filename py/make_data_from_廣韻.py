import pandas as pd
import tqdm
import csv

攝之韻目不論調 = {
    "通": {"東","冬","鍾"},
    "江": {"江"},
    "宕": {"唐","陽"},
    "梗": {"庚","耕","清","青"},
    "曾": {"登","蒸"},
    "臻": {"痕","魂","殷","文","元","真","臻"},
    "山": {"寒","桓","山","刪","仙","先"},
    "深": {"侵"},
    "咸": {"覃","談","咸","銜","嚴","凡","鹽","添"},
    "果": {"歌","戈"},
    "假": {"麻"},
    "遇": {"模","魚","虞"},
    "蟹": {"泰","咍","灰","佳","皆","夬","廢","祭","齊"},
    "止": {"之","微","支","脂"},
    "效": {"豪","肴","宵","蕭"},
    "流": {"侯","尤","幽"}
}

def extract(音韻地位,項目名稱):
    if 項目名稱 == "聲母":
        return 音韻地位[:1]
    if 項目名稱 == "韻母":
        return 音韻地位[1:-1]
    if 項目名稱 == "聲調":
        return 音韻地位[-1:]
    if 項目名稱 == "等":
        if 音韻地位[1] in "開合":
            return 音韻地位[2]
        else:
            return 音韻地位[1]
    if 項目名稱 == "擴充等":
        count = 0
        if 音韻地位[1] in "開合":
            count += 1
        if 音韻地位[2+count] in "ABC":
            return 音韻地位[2+count]
        else
            return 音韻地位[1+count]
    if 項目名稱 == "音韻地位":
        return 音韻地位
    if 項目名稱 == "韻目不論調":
        return 音韻地位[-2]
    if 項目名稱 == "攝":
        韻目 = extract(音韻地位,"韻目不論調")
        for 攝, 韻目不論調們 in 攝之韻目不論調.items():
            if 韻目 in 韻目不論調們:
                return 攝

def make_data(項目名稱: str, 參照: bool):
    df = pd.read_csv('廣韻.csv')

    data_word=[]
    data_value=[]
    data_ok=[]

    data_word_一對多=[]
    data_value_一對多=[]

    for index,row in tqdm.tqdm(df.iterrows()):
        字頭 = row['字頭'][0]
        項目 = extract(row['音韻地位'], 項目名稱)

        if 字頭 in data_word:
            index=data_word.index(字頭)
            if data_value[index]!=項目:
                data_ok[index]=False
        else:
            data_word.append(字頭)
            data_value.append(項目)
            data_ok.append(True)

        if 字頭 in data_word_一對多:
            index=data_word_一對多.index(字頭)
            if 項目 not in data_value_一對多[index]:
                data_value_一對多[index].append(項目)
        else:
            data_word_一對多.append(字頭)
            data_value_一對多.append([項目])

    data=[]
    data_一對多=[]

    length=len(data_word)
    length_一對多=len(data_word)

    if 參照:
        for i in tqdm.tqdm(range(length)):
            if data_ok[i]:
                data.append([data_word[i],list_音韻地位_一對多_字.index(data_word[i]),data_value[i]])
        for i in tqdm.tqdm(range(length_一對多)):
                data_一對多.append([data_word_一對多[i],list_音韻地位_一對多_字.index(data_word[i]),*data_value_一對多[i]])
    else:
        for i in tqdm.tqdm(range(length)):
            if data_ok[i]:
                data.append([data_word[i],data_value[i]])
        for i in tqdm.tqdm(range(length_一對多)):
                data_一對多.append([data_word_一對多[i],*data_value_一對多[i]])

    with open(f'{項目名稱}.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerows(data)
    with open(f'{項目名稱}_一對多.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerows(data_一對多)

if __name__ == '__main__':
    #make_data("音韻地位",False)
    list_音韻地位_一對多_字=[]
    with open('音韻地位_一對多.csv', mode='r', encoding='utf-8') as ff:
        reader = csv.reader(ff)
        for row in reader:
            if row:
                item = row[0]
                list_音韻地位_一對多_字.append(item)
    make_data("聲母",True)
    make_data("韻母",True)
    make_data("等",True)
    make_data("攝",True)
    make_data("聲調",True)