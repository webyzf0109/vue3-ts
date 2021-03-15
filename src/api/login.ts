import axios from '.'


//获取验证码
export function loadCaptcha<T>() {
    return axios.get<T,T>('/login/captcha')
}
