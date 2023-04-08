import json
import re
with open(".\\题目1.txt", "r",encoding="utf-8") as f:  # 打开文件
    data = f.read()  # 读取文件

m=re.compile("(^(\d)+?(\s)*?[、|\s].*?答案.*?[A-Z]+)$",re.S)
result=m.findall(data)
#print(result)
s=result[0][0]
string=re.sub(r'\n',"",s)#将换行全部去掉
result = re.findall(r"((?:\d)*?[、|\s].*?答案: [A-Z]+?(?=(?:\d)*?[、|\s]))", string)
#print(len(result))
#print(result[0])
#s=result[3]
quizQuestions=[]
index=0
for s in result:
    quizQuestion={}
    index=index+1
    try:
        question=re.search(r"^(?:\d+)(?=[、|\s]).*?\?(?=#A)",s);
        question=question.group(0)
        #print('question:',question)


        answers=[]
        #answer={}
        #print(s)
        w=re.findall(r"(#[A-Z]\)(?![A-Z]\)).+?(?=#[A-Z]\)|答案))",s);#(?<=[A-Z]\))?
        #print(w)
        for q in w:
            answer = {}
            typeT=re.search(r"#([A-Z])\)",q)
            type=typeT.group(1)
            #print('type:',type)
            content=re.search(r"(?<=#([A-Z])\))(.*)",q)
            content=content.group(2)
            #print('content:',content)

            answer["type"]=type
            answer["content"] = content

            #print('answer',answer)
            answers.append(answer)
        print('answers',index,answers)
        rightAnswers=[]
        rightAnswersAll=re.search(r"答案: ([A-Z]+)",s).group(1);
        for a in rightAnswersAll:
            rightAnswers.append(a)
        #print('rightAnswers:',rightAnswers)
        quizQuestion["question"]=question
        quizQuestion["answers"]=answers
        quizQuestion["rightAnswers"] = rightAnswers
        quizQuestions.append(quizQuestion)
        #break
    except:
        print('报错question',index)
        #break
#print(json.dumps(quizQuestions))
#print(str(quizQuestions))
print(len(quizQuestions))
with open('题目2.txt', 'w',encoding="utf-8") as f:
    txt=json.dumps(quizQuestions,ensure_ascii=False)
    #print('txt',txt)
    #JS key 不能带引号
    txt=re.sub(r'\"(\S+)\":',r'\1:',txt)
    #print(txt)
    f.write(txt)