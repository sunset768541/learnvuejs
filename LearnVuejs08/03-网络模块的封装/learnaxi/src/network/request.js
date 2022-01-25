import axios from "axios";

export function request(config, success, failure) {
  //1.创建实例
  const instance = axios.create({baseURL: 'http://123.207.32.32:8000', timeout: 5000})
  //发送真正请求
  instance(config)
    .then(res => {
      console.log(res)
      success(res)
    })
    .catch(err => {
      console.log(err);
      failure(err)
    })
}

const requestInstance = axios.create({baseURL: 'http://123.207.32.32:8000', timeout: 5000})

export function requestWithPromise(config) {
  return new Promise((resolve, reject) => {
    requestInstance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}


export function requestDirectReturn(config) {

  requestInstance.interceptors.request.use(con => {
    console.log("请求成功：", con);
    return con
  }, error => {
    console.log("请求失败：", error);
  });
  requestInstance.interceptors.response.use(conf => {
    console.log("响应成功: ", conf);
    return conf
  }, error => {
    console.log("响应失败: ", error);
  });
  return requestInstance(config)
}


//可能存在多个实例
// export function request2(){
//
// }
