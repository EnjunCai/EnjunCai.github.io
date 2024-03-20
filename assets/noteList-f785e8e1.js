const e=[{id:"note1",title:"深拷贝和浅拷贝",text:"个人对深拷贝和浅拷贝的一个了解",tag:"js",detail:[{type:"heading",raw:`## 什么是深拷贝和浅拷贝？
`,depth:2,text:"什么是深拷贝和浅拷贝？",tokens:[{type:"text",raw:"什么是深拷贝和浅拷贝？",text:"什么是深拷贝和浅拷贝？"}]},{type:"blockquote",raw:`> 都是用于拷贝数据，区别在于拷贝的数据会不会影响原数据，根本问题是因为js的数据存储位置的差异，js中基本类型的数据直接存储在栈内存中，而引用类型都会在堆内存中开辟一个空间存储数据，指针存储在占内存中。
`,tokens:[{type:"paragraph",raw:"都是用于拷贝数据，区别在于拷贝的数据会不会影响原数据，根本问题是因为js的数据存储位置的差异，js中基本类型的数据直接存储在栈内存中，而引用类型都会在堆内存中开辟一个空间存储数据，指针存储在占内存中。",text:"都是用于拷贝数据，区别在于拷贝的数据会不会影响原数据，根本问题是因为js的数据存储位置的差异，js中基本类型的数据直接存储在栈内存中，而引用类型都会在堆内存中开辟一个空间存储数据，指针存储在占内存中。",tokens:[{type:"text",raw:"都是用于拷贝数据，区别在于拷贝的数据会不会影响原数据，根本问题是因为js的数据存储位置的差异，js中基本类型的数据直接存储在栈内存中，而引用类型都会在堆内存中开辟一个空间存储数据，指针存储在占内存中。",text:"都是用于拷贝数据，区别在于拷贝的数据会不会影响原数据，根本问题是因为js的数据存储位置的差异，js中基本类型的数据直接存储在栈内存中，而引用类型都会在堆内存中开辟一个空间存储数据，指针存储在占内存中。"}]}],text:"都是用于拷贝数据，区别在于拷贝的数据会不会影响原数据，根本问题是因为js的数据存储位置的差异，js中基本类型的数据直接存储在栈内存中，而引用类型都会在堆内存中开辟一个空间存储数据，指针存储在占内存中。"},{type:"space",raw:`

`},{type:"heading",raw:`### 一、浅拷贝

`,depth:3,text:"一、浅拷贝",tokens:[{type:"text",raw:"一、浅拷贝",text:"一、浅拷贝"}]},{type:"paragraph",raw:"如果数据在内存空间有被共享访问的，但是不完全被共享访问的就是浅拷贝",text:"如果数据在内存空间有被共享访问的，但是不完全被共享访问的就是浅拷贝",tokens:[{type:"text",raw:"如果数据在内存空间有被共享访问的，但是不完全被共享访问的就是浅拷贝",text:"如果数据在内存空间有被共享访问的，但是不完全被共享访问的就是浅拷贝"}]},{type:"space",raw:`

`},{type:"paragraph",raw:`例如：这个变量中存在引用类型
`,text:"例如：这个变量中存在引用类型",tokens:[{type:"text",raw:"例如：这个变量中存在引用类型",text:"例如：这个变量中存在引用类型"}]},{type:"code",raw:`\`\`\`js
//浅拷贝
let a = [1,2,3,[3,4]]
let b = [...a]

a[0]=10  //不会影响变量b
a[3][0]=100 //会影响变量b，因为是浅拷贝

\`\`\`
`,lang:"js",text:`//浅拷贝
let a = [1,2,3,[3,4]]
let b = [...a]

a[0]=10  //不会影响变量b
a[3][0]=100 //会影响变量b，因为是浅拷贝
`},{type:"paragraph",raw:"这是因为 [1,2,3,[3,4]] 这组数据是引用类型，所以被存储在堆内存中，但是里面又包含了一个引用类型，所以在堆内存中存储的应该是他的指针，也就是[1,2,3,0X001]   这个指针又在堆内存中生成了一个独立空间，当你对这个变量进行拷贝，尽管复制了一份独立的空间，也会因为这个指针问题导致数据共享，这个就是浅拷贝，为了解决这个所以需要用到深拷贝",text:"这是因为 [1,2,3,[3,4]] 这组数据是引用类型，所以被存储在堆内存中，但是里面又包含了一个引用类型，所以在堆内存中存储的应该是他的指针，也就是[1,2,3,0X001]   这个指针又在堆内存中生成了一个独立空间，当你对这个变量进行拷贝，尽管复制了一份独立的空间，也会因为这个指针问题导致数据共享，这个就是浅拷贝，为了解决这个所以需要用到深拷贝",tokens:[{type:"text",raw:"这是因为 [1,2,3,[3,4]] 这组数据是引用类型，所以被存储在堆内存中，但是里面又包含了一个引用类型，所以在堆内存中存储的应该是他的指针，也就是[1,2,3,0X001]   这个指针又在堆内存中生成了一个独立空间，当你对这个变量进行拷贝，尽管复制了一份独立的空间，也会因为这个指针问题导致数据共享，这个就是浅拷贝，为了解决这个所以需要用到深拷贝",text:"这是因为 [1,2,3,[3,4]] 这组数据是引用类型，所以被存储在堆内存中，但是里面又包含了一个引用类型，所以在堆内存中存储的应该是他的指针，也就是[1,2,3,0X001]   这个指针又在堆内存中生成了一个独立空间，当你对这个变量进行拷贝，尽管复制了一份独立的空间，也会因为这个指针问题导致数据共享，这个就是浅拷贝，为了解决这个所以需要用到深拷贝"}]},{type:"space",raw:`

`},{type:"blockquote",raw:`> 浅拷贝的常见实现方法
`,tokens:[{type:"paragraph",raw:"浅拷贝的常见实现方法",text:"浅拷贝的常见实现方法",tokens:[{type:"text",raw:"浅拷贝的常见实现方法",text:"浅拷贝的常见实现方法"}]}],text:"浅拷贝的常见实现方法"},{type:"code",raw:`\`\`\`js
//展开运算符
let a = [1,2,3,4,5]
let b =  [...a]

// Object.assign
let obj = {a:1,b:2}
let newObj = Object.assign({},obj)

\`\`\``,lang:"js",text:`//展开运算符
let a = [1,2,3,4,5]
let b =  [...a]

// Object.assign
let obj = {a:1,b:2}
let newObj = Object.assign({},obj)
`},{type:"space",raw:`

`},{type:"heading",raw:`### 二、深拷贝
`,depth:3,text:"二、深拷贝",tokens:[{type:"text",raw:"二、深拷贝",text:"二、深拷贝"}]},{type:"paragraph",raw:`对这个变量完全拷贝，并且对包含的所有引用类型都开辟一个独立空间
`,text:"对这个变量完全拷贝，并且对包含的所有引用类型都开辟一个独立空间",tokens:[{type:"text",raw:"对这个变量完全拷贝，并且对包含的所有引用类型都开辟一个独立空间",text:"对这个变量完全拷贝，并且对包含的所有引用类型都开辟一个独立空间"}]},{type:"blockquote",raw:`> 深拷贝常见实现方法
`,tokens:[{type:"paragraph",raw:"深拷贝常见实现方法",text:"深拷贝常见实现方法",tokens:[{type:"text",raw:"深拷贝常见实现方法",text:"深拷贝常见实现方法"}]}],text:"深拷贝常见实现方法"},{type:"code",raw:`\`\`\`js
// 缺点是如果数据中包括函数、正则、时间等对象将无法拷贝
JSON.parse(JSON.stringify(obj))

//利用lodash的方法快速实现
_.cloneDeep(obj)

//利用递归实现 (这里只展示基础和简单的)
function cloneDeep(obj){
  if(typeof obj !=='object'||obj==null)return obj //判断是不是对象，不是直接返回，终止递归

  let result = Array.isArray(obj)?[]:{} //判断是数组还是对象

   for(let key in obj){
    if(obj.hasOwnProperpty(key)){ //过滤条件，必须私有属性
      
       if (obj[i] instanceof Date) {
             result[i] = new Date(obj[i].getTime());
        } else if (obj[i] instanceof RegExp) {
              result[i] = new RegExp(obj[i]);
        } else{
         result[key]=typeof obj[key]=='object'?deepCopy(obj[key]):obj[key]   
        }
     
    }
  }

  return result;
}

\`\`\``,lang:"js",text:`// 缺点是如果数据中包括函数、正则、时间等对象将无法拷贝
JSON.parse(JSON.stringify(obj))

//利用lodash的方法快速实现
_.cloneDeep(obj)

//利用递归实现 (这里只展示基础和简单的)
function cloneDeep(obj){
  if(typeof obj !=='object'||obj==null)return obj //判断是不是对象，不是直接返回，终止递归

  let result = Array.isArray(obj)?[]:{} //判断是数组还是对象

   for(let key in obj){
    if(obj.hasOwnProperpty(key)){ //过滤条件，必须私有属性
      
       if (obj[i] instanceof Date) {
             result[i] = new Date(obj[i].getTime());
        } else if (obj[i] instanceof RegExp) {
              result[i] = new RegExp(obj[i]);
        } else{
         result[key]=typeof obj[key]=='object'?deepCopy(obj[key]):obj[key]   
        }
     
    }
  }

  return result;
}
`},{type:"space",raw:`


`}]}];export{e as n};
