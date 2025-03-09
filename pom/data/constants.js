import dotenv from 'dotenv'
dotenv.config();

export const URLS={
    SAUCEDEMOURL:process.env.SAUCEDEMOURL 
}

export const CREDENTIALS={
    SAUCEDEMOUSER:process.env.USER, 
    SAUCEDEMOPASS:process.env.PASS 

}