export interface HashTable<T> {
    [key: string]: T;
}

export interface KeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
}
export interface KeyValuePairPlus<TKey, TTitle, TValue> {
    Key: TKey;
    Title: TTitle;
    Value: TValue;
}