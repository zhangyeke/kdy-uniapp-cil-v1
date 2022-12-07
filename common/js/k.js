import * as pageFuns from "@/common/js/page-handle.js"
import * as dateFuns from "@/common/js/date-handle.js"
import * as dataFuns from "@/common/js/data-handle.js"
import * as permissionsFuns from "@/common/js/permissions-handle.js"
import * as utils from "@/common/js/utils.js"

const install = (Vue, vm) => {
	Vue.prototype.$k = {
		...pageFuns,
		...dateFuns,
		...dataFuns,
		...permissionsFuns,
		...utils,
	}

}

export default {
	install
}