import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IPersonalProject {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78058383-2f716900-73c3-11ea-8846-0eb0ae055f32.png)
   *
   */
  export interface Payload extends ICommon.Payload {
    /** ### 개인프로젝트 리스트 */
    list: Item[];
  }

  interface Item {
    /**
     * ### 오픈소스 활동명
     */
    title: string;

    /** ### 오픈소스 활동 설명 */
    descriptions: IRow.Description[];
  }
}
