interface IDatasetProperties {
    property: string,
    type: any,
    description?: any
}


type DatasetProperties = IDatasetProperties[]

export type { DatasetProperties };