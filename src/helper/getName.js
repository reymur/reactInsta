export class GetName {

    static getNames = (name: string) => {
        return name.length <= 8 ? name :
            name.substr(0,8) +'...'
    }
}
