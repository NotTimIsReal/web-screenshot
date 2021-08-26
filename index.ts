
const puppeteer=require( 'puppeteer')
const fs=require('fs');
export namespace discord_screenshot{
     export class screenshot{
        /**
         *  @param deleteImage If set true then after 1 second the image will be deleted if set false the image will not be deleted
         * 
         * */
        deleteImage:boolean
        constructor(deleteImage:boolean){
            this.deleteImage=deleteImage
            
        }
        /**
         * @param site This is the site that puppeteer will go to
         * @param path Where the image will be stored, extention can be jpeg or png
         * */
        async png(site:string, path:string){
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(site);
            await page.screenshot({ path: path })
            await browser.close();
            if(this.deleteImage===true){
            setTimeout(function(){
                fs.unlink(path, (err:any)=>{if(err)return TypeError(err.stack)})
                return
            },1000)}
            return
        }


    }}

