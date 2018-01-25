class Tab {
    //构造函数
    constructor ({liArr}) {
        this.liArr = liArr;
        this.init();
    }
    //实例方法
    init () {
        this.createWrap();
    }
    //创建li
    createUl () {
        let ul = document.createElement("ul");
        ul.className = "uls";
        for (let i = 0;i < this.liArr.length;i++) {
            let li = document.createElement("li");
            li.innerHTML = this.liArr[i];
            ul.append(li);
        }
        return ul;
    }
    //创建内容
    createCon () {
        let con = document.createElement("div");
        con.className = "con";
        for (let i = 0; i < this.liArr.length; i++) {
            let conDiv = document.createElement("div");
            conDiv.innerHTML = this.liArr[i];
            con.append(conDiv);
        }
        return con;
    }
    //点击li
    click () {
        //获取ul
        let uls = document.querySelector(".uls");
        //获取li
        let lis = uls.querySelectorAll("li");
        //获取con
        let con = document.querySelector(".con");
        //获取con里的div
        let divs = con.querySelectorAll("div");
        lis[0].classList.add("bg");
        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener("click", (event) => {
                for (let j = 0; j < lis.length; j++) {
                    lis[j].classList.remove("bg");
                    divs[j].style.display = "none";
                }
                lis[i].classList.add("bg");
                divs[i].style.display = "block";
            })
        }
    }
    createWrap () {
        let oWrap = document.createElement("div");
        let oUl = this.createUl();
        let oCon = this.createCon();
        oWrap.className = "wrap";
        oWrap.append(oUl);
        oWrap.append(oCon);
        document.body.append(oWrap);
        this.click();
    }
}
let tab = new Tab({
    liArr: ["一", "二", "三", "四"]
});