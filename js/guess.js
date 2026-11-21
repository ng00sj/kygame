//字典
const dict_csv = new Map();
dict_csv.set("等",'data/等.csv');
dict_csv.set("等類",'data/等類.csv');
dict_csv.set("攝",'data/攝.csv');
dict_csv.set("聲母",'data/聲母.csv');
dict_csv.set("聲調",'data/聲調.csv');
const dict_text = new Map();
dict_text.set("等",'等字');
dict_text.set("等類",'類字');
dict_text.set("攝",'攝字');
dict_text.set("聲母",'母字');
dict_text.set("聲調",'聲字');
const dict_make_button = new Map([
    ["等", ()=>{
        //前置
        let w = window.innerWidth;
        let h = window.innerHeight;
        //做按鈕函式
        function make_button(color,list,container){
            list.forEach((char,i)=>{
                function func1(){press_button(char)}
                const p=document.createElement("button");
                p.innerText=char;
                p.addEventListener("click",func1);
                p.style="background-color:"+color[i]+";";
                p.id="button_"+char;
                document.getElementById(container).appendChild(p);
            });
        }
        //大框
        if (w>h){
            list=[[1,[1,2]]];
        }else{
            list=[[1,[1,2]]];
        }
        list.forEach(([i,jj])=>{
            const p=document.createElement("div");
            p.classList.add("area");
            p.id="area_"+i;
            document.getElementById("box_kb").appendChild(p);
            jj.forEach(j=>{
                const pp=document.createElement("div");
                pp.classList.add("kb");
                pp.id="kb"+j;
                document.getElementById("area_"+i).appendChild(pp);
            });
        });
        //小框
        make_button(["rgb(255, 133, 133)","rgb(255, 255, 100)"],["一","二"],"kb1");
        make_button(["rgb(133, 255, 133)","rgb(133, 133, 255)"],["三","四"],"kb2");
    }],
    ["等類", ()=>{
        //前置
        let w = window.innerWidth;
        let h = window.innerHeight;
        //做按鈕函式
        function make_button(color,list,container){
            list.forEach((char,i)=>{
                function func1(){press_button(char)}
                const p=document.createElement("button");
                p.innerText=char;
                p.addEventListener("click",func1);
                p.style="background-color:"+color[i]+";";
                p.id="button_"+char;
                document.getElementById(container).appendChild(p);
            });
        }
        //大框
        if (w>h){
            list=[[1,[1,2]]];
        }else{
            list=[[1,[1,2]]];
        }
        list.forEach(([i,jj])=>{
            const p=document.createElement("div");
            p.classList.add("area");
            p.id="area_"+i;
            document.getElementById("box_kb").appendChild(p);
            jj.forEach(j=>{
                const pp=document.createElement("div");
                pp.classList.add("kb");
                pp.id="kb"+j;
                document.getElementById("area_"+i).appendChild(pp);
            });
        });
        //小框
        make_button(["rgb(255, 133, 133)","rgb(100, 100, 200)","rgb(133, 133, 255)"],["一","二","四"],"kb1");
        make_button(["rgb(255, 255, 100)","rgb(100, 200, 100)","rgb(133, 255, 133)"],["C","B","A"],"kb2");
    }],
    ["攝", ()=>{
        //前置
        let w = window.innerWidth;
        let h = window.innerHeight;
        //做按鈕
        function make_button(color,list,container){
            list.forEach((char,i)=>{
                function func1(){press_button(char)}
                const p=document.createElement("button");
                p.innerText=char;
                p.addEventListener("click",func1);
                p.style="background-color:"+color[i]+";";
                p.id="button_"+char;
                document.getElementById(container).appendChild(p);
            });
        }

        //大框
        if (w>h){
            list=[[1,[1,2,3,4]]];
        }else{
            list=[[1,[1,2,3,4]]];
        }
        list.forEach(([i,jj])=>{
            const p=document.createElement("div");
            p.classList.add("area");
            p.id="area_"+i;
            document.getElementById("box_kb").appendChild(p);
            jj.forEach(j=>{
                const pp=document.createElement("div");
                pp.classList.add("kb");
                pp.id="kb"+j;
                document.getElementById("area_"+i).appendChild(pp);
            });
        });
        //小框
        make_button(["rgb(255, 133, 133)","rgb(255, 133, 133)","rgb(255, 133, 133)","rgb(255, 133, 133)"],["果","假","遇","蟹"],"kb1");
        make_button(["rgb(255, 255, 100)","rgb(133, 255, 133)","rgb(133, 255, 133)"],["止","效","流"],"kb2");
        make_button(["rgb(100, 255, 255)","rgb(100, 255, 255)","rgb(100, 255, 255)","rgb(100, 255, 255)","rgb(100, 255, 255)"],["通","江","宕","梗","曾"],"kb3");
        make_button(["rgb(133, 133, 255)","rgb(133, 133, 255)","rgb(255, 100, 255)","rgb(255, 100, 255)"],["山","臻","咸","深"],"kb4");
    }],
    ["聲母", ()=>{
        //前置
        let w = window.innerWidth;
        let h = window.innerHeight;
        //做按鈕
        function make_button(color,list,container){
            list.forEach(char=>{
                function func1(){press_button(char)}
                const p=document.createElement("button");
                p.innerText=char;
                p.addEventListener("click",func1);
                p.style="background-color:"+color+";";
                p.id="button_"+char;
                document.getElementById(container).appendChild(p);
            });
        }

        //大框
        if (w>h){
            list=[[1,[1,2,3]],[2,[4,5,6]],[3,[7,8,9]]];
        }else{
            list=[[1,[1,2,3,4,5,6,7,8,9]]];
        }
        list.forEach(([i,jj])=>{
            const p=document.createElement("div");
            p.classList.add("area");
            p.id="area_"+i;
            document.getElementById("box_kb").appendChild(p);
            jj.forEach(j=>{
                const pp=document.createElement("div");
                pp.classList.add("kb");
                pp.id="kb"+j;
                document.getElementById("area_"+i).appendChild(pp);
            });
        });
        //小框
        make_button("rgb(255, 133, 133)",["幫","滂","並","明"],"kb1");
        make_button("rgb(173, 255, 126)",["端","透","定","泥"],"kb2");
        make_button("rgb(122, 255, 153)",["知","徹","澄","娘"],"kb3");
        make_button("rgb(118, 123, 255)",["精","清","從","心","邪"],"kb4");
        make_button("rgb(132, 175, 255)",["莊","初","崇","生","俟"],"kb5");
        make_button("rgb(126, 221, 255)",["章","昌","常","書","船"],"kb6");
        make_button("rgb(253, 255, 120)",["見","溪","羣","疑"],"kb7");
        make_button("rgb(255, 209, 130)",["影","云","以","曉","匣"],"kb8");
        make_button("rgb(212, 125, 255)",["來","日"],"kb9");
    }],
    ["聲調", ()=>{
        //前置
        let w = window.innerWidth;
        let h = window.innerHeight;
        //做按鈕
        function make_button(color,list,container){
            list.forEach((char,i)=>{
                function func1(){press_button(char)}
                const p=document.createElement("button");
                p.innerText=char;
                p.addEventListener("click",func1);
                p.style="background-color:"+color[i]+";";
                p.id="button_"+char;
                document.getElementById(container).appendChild(p);
            });
        }

        //大框
        if (w>h){
            list=[[1,[1,2]]];
        }else{
            list=[[1,[1,2]]];
        }
        list.forEach(([i,jj])=>{
            const p=document.createElement("div");
            p.classList.add("area");
            p.id="area_"+i;
            document.getElementById("box_kb").appendChild(p);
            jj.forEach(j=>{
                const pp=document.createElement("div");
                pp.classList.add("kb");
                pp.id="kb"+j;
                document.getElementById("area_"+i).appendChild(pp);
            });
        });
        //小框
        make_button(["rgb(255, 133, 133)","rgb(255, 255, 100)"],["平","上"],"kb1");
        make_button(["rgb(133, 255, 133)","rgb(133, 133, 255)"],["去","入"],"kb2");
    }],
]);

const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode') || "聲母";
console.log(mode);
document.title="廣韻猜"+mode;
dict_make_button.get(mode)?.();

//處理遊戲資料
let csvData=[];
let csvData_place=[];
let lenData;
let ran=0;
let num=0;
let right=0;
fetch(dict_csv.get(mode))
.then(response => response.text())
.then(csvText => {
    //處理 csvText
    const rows = csvText.trim().split('\n');
    csvData = rows.map(row => row.split(','));
    lenData = rows.length;
});
fetch("data/音韻地位_一對多.csv")
.then(response => response.text())
.then(csvText => {
    //處理 csvText
    const rows = csvText.trim().split('\n');
    csvData_place = rows.map(row => row.split(','));
});
//遊戲中按鈕反應
function press_button(ch){
    const box_tip = document.getElementById("box_tip");
    const box_check = document.getElementById("box_check");
    const box_num = document.getElementById("box_num");
    if (num==0){
        box_check.innerText='正式開始';
        box_num.innerText='目前答對0題，共0題';
    }else{
        const word = csvData[ran][0].trim();
        const index = parseInt(csvData[ran][1].trim(),10);
        const ans = csvData[ran][2].trim();
        if (ans===ch){
            right+=1
            box_check.replaceChildren();
            const text_1=document.createTextNode('✔');
            const span_word=document.createElement('span');
            span_word.textContent=word;
            span_word.classList.add('word');
            const text_10=document.createTextNode('（');
            box_check.appendChild(text_1);
            box_check.appendChild(span_word);
            box_check.appendChild(text_10);
            
            for(let i=1; i<csvData_place[index].length; i++){
                const span=document.createElement('span');
                const text=document.createTextNode(csvData_place[index].length==(i+1)?'':'、');
                span.textContent=csvData_place[index][i].trim();
                span.classList.add('word2');
                box_check.appendChild(span);
                box_check.appendChild(text);
            }
            
            const text_2=document.createTextNode('）是');
            const span_ans=document.createElement('span');
            span_ans.textContent=ans;
            span_ans.classList.add('word');
            const text_3=document.createTextNode(dict_text.get(mode));
            box_check.appendChild(text_2);
            box_check.appendChild(span_ans);
            box_check.appendChild(text_3);
            box_check.style.color='green';
            const buttons=document.querySelectorAll("button");
            buttons.forEach(btn=>{
                if (btn.innerText===ans){
                    btn.classList.add("flash_right");
                    setTimeout(()=>btn.classList.remove("flash_right"),500)
                }
            });
        }else{
            box_check.replaceChildren();
            const text_1=document.createTextNode('✘');
            const span_word=document.createElement('span');
            span_word.textContent=word;
            span_word.classList.add('word');
            const text_10=document.createTextNode('（');
            box_check.appendChild(text_1);
            box_check.appendChild(span_word);
            box_check.appendChild(text_10);
            
            for(let i=1; i<csvData_place[index].length; i++){
                const span=document.createElement('span');
                const text=document.createTextNode(csvData_place[index].length==(i+1)?'':'、');
                span.textContent=csvData_place[index][i].trim();
                span.classList.add('word2');
                box_check.appendChild(span);
                box_check.appendChild(text);
            }
            
            const text_2=document.createTextNode('）是');
            const span_ans=document.createElement('span');
            span_ans.textContent=ans;
            span_ans.classList.add('word');
            const text_3=document.createTextNode(dict_text.get(mode));
            box_check.appendChild(text_2);
            box_check.appendChild(span_ans);
            box_check.appendChild(text_3);
            box_check.style.color='red';
            const buttons=document.querySelectorAll("button");
            buttons.forEach(btn=>{
                if (btn.innerText===ans){
                    btn.classList.add("flash");
                    setTimeout(()=>btn.classList.remove("flash"),500)
                }
            });
        };
        rate=Math.round(right/(num)*100)
        box_num.innerText='目前答對'+right+'/'+(num)+'，答對率'+rate+'%';
    }
    num+=1;
    box_tip.innerText='第'+num+'題';
    ran=Math.floor(Math.random()*lenData);
    document.getElementById("word").innerText = csvData[ran][0];
}
