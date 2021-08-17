import md5 from 'md5'

    export const publickey = process.env.PUBLIC_KEY
    export  const privatekey = process.env.PRIVATE_KEY
    export const time = Number(new Date()) 

    export const has = md5(time + privatekey + publickey)
    