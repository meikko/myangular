import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private http: HttpClient) { }

  /**
   * 获取指令执行情况列表
   * @param query ExecutiveConditionQuery
   * @param page 当前页
   * @param size 每页展示数量
   * @param orderBy 排序方式
   */
  TestgetUserList(): Observable<any> {
    let params = new HttpParams();
    // for (const key of Object.keys(query)) {
    //   if (query[key] !== null) {
    //     params = params.set(key, query[key]);
    //   }
    // }
    params = params.set('zifu', String('Y'));
    params = params.set('shuzi', String(3));
    // 分页排序
    // params = params.set('page', String(page)).set('size', String(size)).set('orderBy', orderBy);
    return this.http.get('/api/test/myest', { params });
  }

  GetCookie(): Observable<any> {
    return this.http.get('api/test/putcookie');
  }

}
