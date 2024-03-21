const e=[{id:"note1",title:"深拷贝和浅拷贝",text:"个人对深拷贝和浅拷贝的一个了解",tag:["js"],detail:[{type:"heading",raw:`## 什么是深拷贝和浅拷贝？
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


`}]},{id:"note2",title:"简单学习一下three.js",text:"学习three初步上手",tag:["three","js"],detail:[{type:"paragraph",raw:`一、安装(以下学习内容基于vue3+ts版本)
`,text:"一、安装(以下学习内容基于vue3+ts版本)",tokens:[{type:"text",raw:"一、安装(以下学习内容基于vue3+ts版本)",text:"一、安装(以下学习内容基于vue3+ts版本)"}]},{type:"code",raw:`\`\`\`
//安装three
yarn add three

//安装types，因为使用ts
yarn add @types/three

//@tweenjs/tween.js  为three添加动画的（根据需求可以不安）
yarn add @tweenjs/tween.js
\`\`\``,lang:"",text:`//安装three
yarn add three

//安装types，因为使用ts
yarn add @types/three

//@tweenjs/tween.js  为three添加动画的（根据需求可以不安）
yarn add @tweenjs/tween.js`},{type:"space",raw:`

`},{type:"paragraph",raw:"二、基础案例",text:"二、基础案例",tokens:[{type:"text",raw:"二、基础案例",text:"二、基础案例"}]},{type:"space",raw:`

`},{type:"paragraph",raw:`1、生成一个场景并添加到dom元素中
`,text:"1、生成一个场景并添加到dom元素中",tokens:[{type:"text",raw:"1、生成一个场景并添加到dom元素中",text:"1、生成一个场景并添加到dom元素中"}]},{type:"code",raw:`\`\`\`vue
<template>
  <div ref="containerRef">123213</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderList,
  Color,
  WebGLRenderer,
} from "three";
// 定义一个容器
const containerRef = ref();
// 创建一个场景
const scene = new Scene();
// 创建一个摄像机
// 参数1：所能看到的一个角度，参数2：宽高比，参数3：看的最近距离，参数4：看的最远距离
const camera = new PerspectiveCamera(45, 1000 / 800, 0.1, 1000);
// 设置摄像机位置,三个参数 x,y,z
camera.position.set(-30, 40, 30);
// 设置相机的朝向
camera.lookAt(scene.position);

// 创建一个渲染
const renderer = new WebGLRenderer();
// 类似设置背景颜色
renderer.setClearColor(new Color("#ccc"));
// 渲染的宽高
renderer.setSize(1000, 800);

onMounted(() => {
  //生命周期注意，必须有dom元素才能渲染
  // 添加到dom元素中
  containerRef.value?.appendChild(renderer.domElement);
  // 渲染
  renderer.render(scene, camera);
});
<\/script>

<style scoped>
</style>
\`\`\`
`,lang:"vue",text:`<template>
  <div ref="containerRef">123213</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderList,
  Color,
  WebGLRenderer,
} from "three";
// 定义一个容器
const containerRef = ref();
// 创建一个场景
const scene = new Scene();
// 创建一个摄像机
// 参数1：所能看到的一个角度，参数2：宽高比，参数3：看的最近距离，参数4：看的最远距离
const camera = new PerspectiveCamera(45, 1000 / 800, 0.1, 1000);
// 设置摄像机位置,三个参数 x,y,z
camera.position.set(-30, 40, 30);
// 设置相机的朝向
camera.lookAt(scene.position);

// 创建一个渲染
const renderer = new WebGLRenderer();
// 类似设置背景颜色
renderer.setClearColor(new Color("#ccc"));
// 渲染的宽高
renderer.setSize(1000, 800);

onMounted(() => {
  //生命周期注意，必须有dom元素才能渲染
  // 添加到dom元素中
  containerRef.value?.appendChild(renderer.domElement);
  // 渲染
  renderer.render(scene, camera);
});
<\/script>

<style scoped>
</style>`},{type:"paragraph",raw:`2、生成一个平面几何体（都基于场景，这里去掉了场景代码）
`,text:"2、生成一个平面几何体（都基于场景，这里去掉了场景代码）",tokens:[{type:"text",raw:"2、生成一个平面几何体（都基于场景，这里去掉了场景代码）",text:"2、生成一个平面几何体（都基于场景，这里去掉了场景代码）"}]},{type:"code",raw:`\`\`\`vue
// 创建一个平面几何体，参数为宽高
const planeGeometry = new PlaneGeometry(10, 10);
// 生成一个材质
const meshBasicMaterial = new MeshBasicMaterial({ color: "#fcfcfc" });
// 将几何体和材质放入Mesh生成
const plane = new Mesh(planeGeometry, meshBasicMaterial);

// rotation是设置旋转
plane.rotation.x = -0.4 * Math.PI;
// plane.rotation.y = -0.4 * Math.PI;
// 可以通过position改变xyx位置，默认是原点
// 添加到场景
scene.add(plane);
\`\`\`
`,lang:"vue",text:`// 创建一个平面几何体，参数为宽高
const planeGeometry = new PlaneGeometry(10, 10);
// 生成一个材质
const meshBasicMaterial = new MeshBasicMaterial({ color: "#fcfcfc" });
// 将几何体和材质放入Mesh生成
const plane = new Mesh(planeGeometry, meshBasicMaterial);

// rotation是设置旋转
plane.rotation.x = -0.4 * Math.PI;
// plane.rotation.y = -0.4 * Math.PI;
// 可以通过position改变xyx位置，默认是原点
// 添加到场景
scene.add(plane);`},{type:"paragraph",raw:`3、创建一个立方体
`,text:"3、创建一个立方体",tokens:[{type:"text",raw:"3、创建一个立方体",text:"3、创建一个立方体"}]},{type:"code",raw:`\`\`\`vue
// 生成一个立方体参数：长宽高
const cubeGeometry = new BoxGeometry(4, 4, 4);
const cubeMaterial = new MeshBasicMaterial({
  color: "#fcfcfc",
  // wireframe: true,//是否为线框
});
const cube = new Mesh(cubeGeometry, cubeMaterial);
cube.position.set(2, 2, 2);
scene.add(cube);
\`\`\`
`,lang:"vue",text:`// 生成一个立方体参数：长宽高
const cubeGeometry = new BoxGeometry(4, 4, 4);
const cubeMaterial = new MeshBasicMaterial({
  color: "#fcfcfc",
  // wireframe: true,//是否为线框
});
const cube = new Mesh(cubeGeometry, cubeMaterial);
cube.position.set(2, 2, 2);
scene.add(cube);`},{type:"paragraph",raw:`4、创建一个球体
`,text:"4、创建一个球体",tokens:[{type:"text",raw:"4、创建一个球体",text:"4、创建一个球体"}]},{type:"code",raw:`\`\`\`vue
// 生成一个球体
const sphereGeometry = new SphereGeometry(4);
const sphereMaterial = new MeshBasicMaterial({
  color: "#fcfcfc",
  wireframe: true, //是否为线框
});
const sphere = new Mesh(sphereGeometry, sphereMaterial);

\`\`\`
`,lang:"vue",text:`// 生成一个球体
const sphereGeometry = new SphereGeometry(4);
const sphereMaterial = new MeshBasicMaterial({
  color: "#fcfcfc",
  wireframe: true, //是否为线框
});
const sphere = new Mesh(sphereGeometry, sphereMaterial);
`}]}];export{e as n};
