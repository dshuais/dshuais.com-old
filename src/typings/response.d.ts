/*
 * @Author: dushuai
 * @Date: 2023-03-19 22:08:30
 * @LastEditors: dushuai
 * @LastEditTime: 2023-04-28 15:59:26
 * @Description: 接口response data类型文件
 */

/**
 * 接口response data类型
 */
declare namespace Res {
  /** response */
  interface ResponseRes<T = any> {
    code: number,
    data: T,
    msg: string
  }

  /** 列表数据类型 */
  interface MeListRes {
    key: string,
    val: CallMeOption[]
  }
  interface CallMeOption {
    name: string,
    url: string
  }

}
