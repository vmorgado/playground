export interface DictionaryInterface {
   get(key: string): any;
   set(key: string, value: any): DictionaryInterface;
}
