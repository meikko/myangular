import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements Resolve<number> {
  // 字典

  constructor() {}




  /**
   * 组装查询条件,如果查询字段为空则不会发送到后端
   * @param query 查询条件
   */
  setParams(query: any): HttpParams {
    let params = new HttpParams();
    if (query == null){
      return params;
    }
    for (const key of Object.keys(query)) {
      // 判断是否为空字符串,去除前后空格
      if (query[key] !== null && typeof query[key] === 'string' && query[key].trim() !== '') {
        params = params.set(key, encodeURI(query[key].trim()));
      }
      // 非字符串判空处理
      if (query[key] !== null && typeof query[key] !== 'string') {
        params = params.set(key, encodeURI(query[key]));
      }
    }
    return params;
  }

  /**
   * 组装查询条件, 添加分页条件
   * @param query 查询条件
   * @param pageIndex 当前页
   * @param pageSize 每页数量
   */
  pageParams(query: any, pageIndex: number, pageSize: number): HttpParams {
    let params = this.setParams(query);
    params = params.set('pageIndex', String(pageIndex)).set('pageSize', String(pageSize));
    return params;
  }

  /**
   * 组装查询条件, 添加分页条件，排序字段
   * @param query 查询条件
   * @param pageIndex 当前页
   * @param pageSize 每页数量
   * @param sortField 排序字段
   */
  pageParamsSort(query: any, pageIndex: number, pageSize: number, sortField: string): HttpParams {
    let params = this.pageParams(query, pageIndex, pageSize);
    params = params.set('sortField', sortField);
    return params;
  }

  /**
   * 分页条件
   * @param pageIndex 前页
   * @param pageSize 每页数量
   */
  setPage(pageIndex: number, pageSize: number): HttpParams {
    let params = new HttpParams();
    params = params.set('pageIndex', String(pageIndex)).set('pageSize', String(pageSize));
    return params;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> | Promise<number> | number {
    return undefined;
  }
}
