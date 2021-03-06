import { Injectable } from '@angular/core';
import { Pageable } from '../../shared/pageable';
import { ResourceAction, ResourceParams } from 'ngx-resource';
import { ResourceMethod } from 'ngx-resource/src/Interfaces';
import { RestClient } from '../../shared/rest-client';
import { Page } from '../../shared/page';

export class QueryInput extends Pageable {

}

@Injectable()
@ResourceParams({
  url: '/users/schools'
})
export class SchoolService extends RestClient {

  @ResourceAction({
    map: (page: Page<any>) => {
      page.content = page.content.map((item) => {

        return {
          name: item,
          members: '注册人员'
        }
      });
      return page;
    }
  })
  query: ResourceMethod<QueryInput, any>;
}
