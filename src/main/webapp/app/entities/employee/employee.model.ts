import { BaseEntity } from './../../shared';

export class Employee implements BaseEntity {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phoneNumber?: string,
        public ssn?: any,
        public photoidContentType?: string,
        public photoid?: any,
    ) {
    }
}
