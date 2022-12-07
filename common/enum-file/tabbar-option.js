import pagesJSON from "@/pages.json"

const TABBARPATH = []
if(pagesJSON.tabBar.list.length){
	pagesJSON.tabBar.list.forEach(item=>{
		TABBARPATH.push(item.pagePath)
	})
}
export default {
	TABBARPATH
}
