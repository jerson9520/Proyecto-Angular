export interface MainInfo{
    path:string,
    title: string,
    icon?:string,
    classCss?:string,
    submenu?: MainInfo[],
}