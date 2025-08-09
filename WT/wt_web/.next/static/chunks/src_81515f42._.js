(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/Button/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Button = ({ children, type, classname, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: classname,
        type: type,
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button/Button.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
};
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/InputTaskInfo/InputTaskInfo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "InputTaskInfo": (()=>InputTaskInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function InputTaskInfo({ label, type, placeholder, disabled }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "flex flex-col gap-[4px] items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-light text-sm text-gray-600",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/InputTaskInfo/InputTaskInfo.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "pl-2 w-60 h-10 bg-white outline-0 rounded text-sm text-black-300 font-normal",
                type: type,
                placeholder: placeholder,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/ui/InputTaskInfo/InputTaskInfo.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/InputTaskInfo/InputTaskInfo.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = InputTaskInfo;
var _c;
__turbopack_context__.k.register(_c, "InputTaskInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/Select/Select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function isUser(obj) {
    return obj && typeof obj.firstname === 'string' && typeof obj.lastname === 'string';
}
function isStatus(obj) {
    return obj && typeof obj.namestatus === 'string';
}
function isPriority(obj) {
    return obj && typeof obj.namepriority === 'string';
}
function Select({ label, options }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "flex flex-col gap-[4px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-light text-sm text-gray-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Select/Select.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "bg-white w-60 h-10 rounded text-sm text-black-300 font-normal pl-1",
                children: options.map((item)=>{
                    let labelValue = '';
                    if (isUser(item)) {
                        labelValue = `${item.firstname} ${item.lastname}`;
                    } else if (isStatus(item)) {
                        labelValue = item.namestatus;
                    } else if (isPriority(item)) {
                        labelValue = item.namepriority;
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: item.id,
                        children: labelValue
                    }, item.id, false, {
                        fileName: "[project]/src/components/ui/Select/Select.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Select/Select.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Select/Select.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Select;
var _c;
__turbopack_context__.k.register(_c, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TopInfoTaskAuthor": (()=>TopInfoTaskAuthor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputTaskInfo$2f$InputTaskInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/InputTaskInfo/InputTaskInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Select$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Select/Select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$fetchConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/fetchConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/api/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$command$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/types/command.types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function TopInfoTaskAuthor({}) {
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [prioritys, setPrioritys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopInfoTaskAuthor.useEffect": ()=>{
            const fetchUsers = {
                "TopInfoTaskAuthor.useEffect.fetchUsers": async ()=>{
                    const config = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$fetchConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConfig"])();
                    const responseUsers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$command$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICOMMAND"].GETUSERS, {}, config);
                    const data = await responseUsers?.json();
                    setUsers(data.data);
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$command$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICOMMAND"].GETPRIORITY, {}, config);
                    const dataPriority = await response?.json();
                    setPrioritys(dataPriority.data);
                    const responseStatus = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$command$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICOMMAND"].GETSTATUS, {}, config);
                    const dataStatus = await responseStatus?.json();
                    setStatus(dataStatus.data);
                }
            }["TopInfoTaskAuthor.useEffect.fetchUsers"];
            fetchUsers();
        }
    }["TopInfoTaskAuthor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-[#F5F7FB]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-[20px] flex-wrap p-4 pl-6 w-300 items-end",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputTaskInfo$2f$InputTaskInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputTaskInfo"], {
                    type: "text",
                    placeholder: "Название задачи",
                    label: "Название задачи"
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputTaskInfo$2f$InputTaskInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputTaskInfo"], {
                    type: "date",
                    placeholder: "Дата создания задачи",
                    label: "Дата создания задачи"
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputTaskInfo$2f$InputTaskInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputTaskInfo"], {
                    type: "date",
                    placeholder: "Дата примерного окончания задачи",
                    label: "Дата примерного окончания задачи"
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    classname: "font-medium bg-blue-500 w-52 h-10 rounded flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out",
                    type: "submit",
                    children: "Прикрепить документы"
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputTaskInfo$2f$InputTaskInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputTaskInfo"], {
                    type: "text",
                    placeholder: "Автор постановки задачи",
                    label: "Автор постановки задачи"
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Select$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    label: 'Исполнитель',
                    options: users ? users : []
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Select$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    label: 'Статус',
                    options: status ? status : []
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    classname: "font-medium bg-blue-500 w-45 h-10 rounded flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out",
                    type: "submit",
                    children: "Добавить задачу"
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    classname: "font-medium bg-blue-500 w-45 h-10 rounded flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out",
                    type: "submit",
                    children: "Повторить задачу"
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InputTaskInfo$2f$InputTaskInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputTaskInfo"], {
                    type: "text",
                    placeholder: "Дополнительная информация"
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Select$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    label: 'Приоритет',
                    options: prioritys ? prioritys : []
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    classname: "font-medium bg-blue-500 w-50 h-10 rounded flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out",
                    type: "submit",
                    children: "Изменить приоритет"
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    classname: "font-medium bg-blue-500 w-45 h-10 rounded flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out",
                    type: "submit",
                    children: "Изменить задачу"
                }, void 0, false, {
                    fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_s(TopInfoTaskAuthor, "NkwkgSHpgWwXeCurnSsGXP0cub0=");
_c = TopInfoTaskAuthor;
var _c;
__turbopack_context__.k.register(_c, "TopInfoTaskAuthor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useGetExecutor.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useGetExecutor": (()=>useGetExecutor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$fetchConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/fetchConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/api/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$command$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/types/command.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useGetExecutor = (data)=>{
    _s();
    const [executor, setExecutor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGetExecutor.useEffect": ()=>{
            async function fetchUsers() {
                const config = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$fetchConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConfig"])();
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$command$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICOMMAND"].GETUSERS, {}, config);
                const dataUsers = await response?.json();
                const dataArr = dataUsers.data;
                const filteredAuthor = dataArr.filter({
                    "useGetExecutor.useEffect.fetchUsers.filteredAuthor": (item)=>item.id === data.executorid
                }["useGetExecutor.useEffect.fetchUsers.filteredAuthor"]);
                setExecutor(filteredAuthor[0]);
            }
            fetchUsers();
        }
    }["useGetExecutor.useEffect"], []);
    return executor;
};
_s(useGetExecutor, "PQWCcWCCcLDkeffXqvdBrXhusII=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useGetPriority.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useGetPriority": (()=>useGetPriority)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$fetchConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/fetchConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/api/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$command$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/types/command.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useGetPriority = (data)=>{
    _s();
    const [prioritys, setPrioritys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGetPriority.useEffect": ()=>{
            const fetchUsers = {
                "useGetPriority.useEffect.fetchUsers": async ()=>{
                    const config = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$fetchConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConfig"])();
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$command$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICOMMAND"].GETPRIORITY, {}, config);
                    const dataPriority = await response?.json();
                    setPrioritys(dataPriority.data);
                }
            }["useGetPriority.useEffect.fetchUsers"];
            fetchUsers();
        }
    }["useGetPriority.useEffect"], []);
    const filteredPriority = prioritys?.filter((item)=>String(item.id) === String(data.priorityid));
    return filteredPriority;
};
_s(useGetPriority, "LFlT5/srzlzRdC15jht+5DM3+YQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useGetStatus.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useGetStatus": (()=>useGetStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$fetchConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/fetchConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/api/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$command$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/types/command.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useGetStatus = (data)=>{
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGetStatus.useEffect": ()=>{
            const fetchUsers = {
                "useGetStatus.useEffect.fetchUsers": async ()=>{
                    const config = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$fetchConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConfig"])();
                    const responseStatus = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$command$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICOMMAND"].GETSTATUS, {}, config);
                    const dataStatus = await responseStatus?.json();
                    setStatus(dataStatus.data);
                }
            }["useGetStatus.useEffect.fetchUsers"];
            fetchUsers();
        }
    }["useGetStatus.useEffect"], []);
    const filteredStatus = status?.filter((item)=>item.id === String(data.statusid));
    return filteredStatus;
};
_s(useGetStatus, "BS896UqrqyybjEKvhypabDkHm2E=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Author/TabAuthorTasksInProcess/TabAuthorTasksInProcess.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TabAuthorTasksInProcess": (()=>TabAuthorTasksInProcess)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGetExecutor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGetExecutor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGetPriority$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGetPriority.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGetStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGetStatus.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function TabAuthorTasksInProcess({ task }) {
    _s();
    const executor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGetExecutor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetExecutor"])(task);
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGetStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetStatus"])(task);
    const priority = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGetPriority$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPriority"])(task);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "border-r-1 border-gray-300 p-2",
                children: priority ? priority[0].namepriority : ''
            }, void 0, false, {
                fileName: "[project]/src/components/Author/TabAuthorTasksInProcess/TabAuthorTasksInProcess.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "border-r-1 border-gray-300 p-2",
                children: status ? status[0].namestatus : ''
            }, void 0, false, {
                fileName: "[project]/src/components/Author/TabAuthorTasksInProcess/TabAuthorTasksInProcess.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "border-r-1 border-gray-300 p-2",
                children: task.nametask
            }, void 0, false, {
                fileName: "[project]/src/components/Author/TabAuthorTasksInProcess/TabAuthorTasksInProcess.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "border-r-1 border-gray-300 p-2",
                children: task.info
            }, void 0, false, {
                fileName: "[project]/src/components/Author/TabAuthorTasksInProcess/TabAuthorTasksInProcess.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "border-r-1 border-gray-300 p-2",
                children: task.datecreate
            }, void 0, false, {
                fileName: "[project]/src/components/Author/TabAuthorTasksInProcess/TabAuthorTasksInProcess.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "border-r-1 border-gray-300 p-2",
                children: task.datechange
            }, void 0, false, {
                fileName: "[project]/src/components/Author/TabAuthorTasksInProcess/TabAuthorTasksInProcess.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "border-r-1 border-gray-300 p-2",
                children: task.dateestimatedcompletion
            }, void 0, false, {
                fileName: "[project]/src/components/Author/TabAuthorTasksInProcess/TabAuthorTasksInProcess.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "border-r-1 border-gray-300 p-2",
                children: task.document
            }, void 0, false, {
                fileName: "[project]/src/components/Author/TabAuthorTasksInProcess/TabAuthorTasksInProcess.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "border-r-1 border-gray-300 p-2",
                style: {
                    minWidth: '150px'
                },
                children: `${executor?.firstname} ${executor?.lastname}`
            }, void 0, false, {
                fileName: "[project]/src/components/Author/TabAuthorTasksInProcess/TabAuthorTasksInProcess.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(TabAuthorTasksInProcess, "HHYwqGXb61S4/ukP+8tkCXrF6T0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGetExecutor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetExecutor"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGetStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetStatus"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGetPriority$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPriority"]
    ];
});
_c = TabAuthorTasksInProcess;
var _c;
__turbopack_context__.k.register(_c, "TabAuthorTasksInProcess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthorTasksInProcess": (()=>AuthorTasksInProcess)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Author$2f$TabAuthorTasksInProcess$2f$TabAuthorTasksInProcess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Author/TabAuthorTasksInProcess/TabAuthorTasksInProcess.tsx [app-client] (ecmascript)");
'use client';
;
;
function AuthorTasksInProcess({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full overflow-x-auto overflow-y-auto p-0 m-0 box-border",
        style: {
            paddingRight: 200
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "min-w-max table-auto border-collapse box-border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "bg-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "border border-white p-2 w-32 text-left",
                                children: "Приоритет"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                                lineNumber: 16,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "border border-white p-2 w-32 text-left",
                                children: "Статус"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                                lineNumber: 17,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "border border-white p-2 w-32 text-left",
                                children: "Задача"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                                lineNumber: 18,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "border border-white p-2 w-200 text-left",
                                children: "Дополнительная информация"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "border border-white p-2 w-40 text-left",
                                children: "Дата создания"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                                lineNumber: 20,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "border border-white p-2 w-48 text-left",
                                children: "Дата последнего изменения"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                                lineNumber: 21,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "border border-white p-2 w-48 text-left",
                                children: "Дата примерного окончания"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "border border-white p-2 w-32 text-left",
                                children: "Документы"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "border border-white p-2 w-32 text-left",
                                children: "Исполнитель"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                                lineNumber: 24,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                        lineNumber: 15,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "h-20 border-t-1 border-b-1 border-gray-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Author$2f$TabAuthorTasksInProcess$2f$TabAuthorTasksInProcess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabAuthorTasksInProcess"], {
                                task: item
                            }, void 0, false, {
                                fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                                lineNumber: 30,
                                columnNumber: 29
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                            lineNumber: 29,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = AuthorTasksInProcess;
var _c;
__turbopack_context__.k.register(_c, "AuthorTasksInProcess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useAppSelector.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAppSelector": (()=>useAppSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Author/Author.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Author": (()=>Author)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$fetchConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/fetchConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$command$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/types/command.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TopInfoTaskAuthor$2f$TopInfoTaskAuthor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TopInfoTaskAuthor/TopInfoTaskAuthor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Author$2f$AuthorTasksInProcess$2f$AuthorTasksInProcess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Author/AuthorTasksInProcess/AuthorTasksInProcess.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/api/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAppSelector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAppSelector.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Author() {
    _s();
    const [stateTabs, setStateTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('process');
    const [tasksAuthor, setTasksAuthor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAppSelector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Author.useAppSelector[user]": (state)=>state.user.user
    }["Author.useAppSelector[user]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Author.useEffect": ()=>{
            const fetchTasksAuthor = {
                "Author.useEffect.fetchTasksAuthor": async ()=>{
                    const config = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$fetchConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConfig"])();
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$types$2f$command$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APICOMMAND"].GETAUTHORTASK, {
                        'id': `2`
                    }, config);
                    const data = await response?.json();
                    setTasksAuthor(data.data);
                }
            }["Author.useEffect.fetchTasksAuthor"];
            fetchTasksAuthor();
        }
    }["Author.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start w-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TopInfoTaskAuthor$2f$TopInfoTaskAuthor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopInfoTaskAuthor"], {}, void 0, false, {
                    fileName: "[project]/src/components/Author/Author.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Author/Author.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between gap-[0px] w-260 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        classname: `${stateTabs === 'process' ? 'border-l-3 border-[#2B7FFF] bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]' : ''} font-medium w-full h-15 flex justify-center items-center text-white cursor-pointer ease-in-out`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-700",
                            children: "Задача в процессе"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Author/Author.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Author/Author.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        classname: `font-medium w-full h-15 flex justify-center items-center text-white cursor-pointer ease-in-out border-l-3 hover:border-l-3 hover:border-[#2B7FFF] hover:bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-700",
                            children: "Завершенные задачи"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Author/Author.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Author/Author.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        classname: `font-medium w-full h-15 flex justify-center items-center text-white cursor-pointer ease-in-out border-l-3 hover:border-l-3 hover:border-[#2B7FFF] hover:bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-700",
                            children: "Отменённые задачи"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Author/Author.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Author/Author.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        classname: `font-medium w-full h-15 flex justify-center items-center text-white cursor-pointer ease-in-out border-l-3 hover:border-l-3 hover:border-[#2B7FFF] hover:bg-[linear-gradient(to_right,_rgba(43,127,255,0.4),_rgba(43,127,255,0.2))]`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-700",
                            children: "Все задачи"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Author/Author.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Author/Author.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Author/Author.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full overflow-x-auto overflow-y-auto p-0 m-0 box-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Author$2f$AuthorTasksInProcess$2f$AuthorTasksInProcess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthorTasksInProcess"], {
                    data: tasksAuthor !== null ? tasksAuthor : []
                }, void 0, false, {
                    fileName: "[project]/src/components/Author/Author.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Author/Author.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Author/Author.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_s(Author, "/wrjQzzRjnO2b1n5POljbtBHiWI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAppSelector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = Author;
var _c;
__turbopack_context__.k.register(_c, "Author");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/author/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Author$2f$Author$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Author/Author.tsx [app-client] (ecmascript)");
'use client';
;
;
function page() {
    // const [stateTabs, setStateTabs] = useState('process')
    // const [tasksAuthor, setTasksAuthor] = useState<Task[] | null>(null)
    // useEffect(() => {
    //     const fetchTasksAuthor = async () => {
    //         const config = await fetchConfig()
    //         const responseUsers = await api(APICOMMAND.GETAUTHORTASK, {}, config)
    //         const data = await responseUsers?.json()
    //         setTasksAuthor(data.data)
    //     }
    //     fetchTasksAuthor()
    // }, [])
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen h-auto font-[family-name:var(--font-geist-sans)] overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex items-start w-screen h-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Author$2f$Author$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Author"], {}, void 0, false, {
                fileName: "[project]/src/app/author/page.tsx",
                lineNumber: 25,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/author/page.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/author/page.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_81515f42._.js.map