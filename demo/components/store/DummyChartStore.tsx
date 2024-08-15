import { ChartStore, GetRequest, QueryRequest } from "@palmyralabs/palmyra-wire";

class DummyChartStore implements ChartStore<any>{
    request: Record<string, string>

    constructor(request: Record<string, string>) {
        this.request = request;
    }

    query(request: QueryRequest): Promise<any[]> {
        var format: Record<string, string> = this.request;
        var url: any = StringFormat(format.urlFormat, {});
        return fetch(url)
            .then((response) => response.json());
    }
    get(request: GetRequest): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getIdentity(o: any) {
        throw new Error("Method not implemented.");
    }
    getIdProperty(): string {
        return "id";
    }
}


const StringFormat = function (str: string, data: any): string {
    if (!data)
        return str;

    if (typeof str === 'string' && (data instanceof Array)) {
        return str.replace(/({\d})/g, function (i) {
            let key: any = i.replace(/{/, '').replace(/}/, '')
            return data[key];
        });
    } else if (typeof str === 'string' && (data instanceof Object)) {
        if (Object.keys(data).length === 0) {
            return str;
        }
        return str.replace(/({([^}]+)})/g, function (i) {
            let key = i.replace(/{/, '').replace(/}/, '');
            if (!data[key]) {
                return i;
            }
            return data[key];
        });

    } else {
        return str;
    }
};

export { DummyChartStore };