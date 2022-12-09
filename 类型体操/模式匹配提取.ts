//提取guang
    type p = Promise<'guang'>;
    type GetValueType<P> = P extends Promise<infer Value> ? Value : never;


//提取1
    type arr = [1,2,3]
    type GetFirst<Arr extends unknown[]> = 
    Arr extends [infer First, ...unknown[]] ? First : never;

//提取last  ，即3
    type GetLast<Arr extends unknown[]> = 
    Arr extends [...unknown[], infer Last] ? Last : never;


//去除数组最后一个元素

    type PopArr<Arr extends unknown[]> = 
    Arr extends [] ? [] 
        : Arr extends [...infer Rest, unknown] ? Rest : never;

//去除第一个元素
    type ShiftArr<Arr extends unknown[]> = 
    Arr extends [] ? [] 
        : Arr extends [unknown, ...infer Rest] ? Rest : never;


字符串匹配
//判断字符串前缀开头
    type StartsWith<Str extends string, Prefix extends string> = 
    Str extends `${Prefix}${string}` ? true : false;


//字符串替换   替换
    type ReplaceStr<
        Str extends string,
        From extends string,
        To extends string
    > = Str extends `${infer Prefix}${From}${infer Suffix}` 
            ? `${Prefix}${To}${Suffix}` : Str;




