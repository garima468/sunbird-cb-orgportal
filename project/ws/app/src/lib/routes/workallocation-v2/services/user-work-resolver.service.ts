import { Injectable } from '@angular/core'
import { catchError, map } from 'rxjs/operators'
import { of, Observable } from 'rxjs'
import { ActivatedRouteSnapshot } from '@angular/router'
import { UserWorkService } from './user-work.service'

@Injectable()
export class UserWorkResolverService {

  constructor(private userWorkService: UserWorkService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // const workorder = route.params['workorder']
    const officerId = route.params['officerId']
    return this.userWorkService.fetchUserWorkAllocation(officerId).pipe(
      map((data: any) => {
        // tslint:disable
        // let data1 = { "result": { "data": { "createdByName": "Moloy Sanyal", "updatedBy": "7aff3da6-ef4d-4185-91e3-a731beef3979", "unmappedCompetencies": [], "unmappedActivities": [], "positionDescription": "ASO looking after service matters of employees in ISTM and involved in the implementation of Mission Karmayogi.", "updatedByName": "Neelabh Singh", "userName": "Neelabh Singh", "userId": "b7d4e20d-1b9e-4ec3-99ff-65e75f78dfa3", "createdAt": 0, "roleCompetencyList": [{ "competencyDetails": [], "roleDetails": { "archivedAt": 0, "archived": false, "addedAt": 0, "updatedBy": null, "childNodes": [{ "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "Receive and sort the applications for internships", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0120", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "Collect and categorise data for work allocation for APAR generation", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0127", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "Collect information for pension cases", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0128", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "Making a note", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0138", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "Drafting a circular", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0139", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }], "name": "Data collector", "description": "Collect data from all the stakeholders and relevant sources", "id": "RID0206", "source": "ISTM", "type": "ROLE", "status": "UNVERIFIED", "updatedAt": 0 } }, { "competencyDetails": [], "roleDetails": { "archivedAt": 0, "archived": false, "addedAt": 0, "updatedBy": null, "childNodes": [{ "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "Initiate a case by putting up file for recruitment of Consultant", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0121", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "Put up file for selecting the suitable applicants for internship ", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0129", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }], "name": "Case initiator", "description": "Initiates a case by putting up the file bringing out all the relevant facts and related rules", "id": "RID0207", "source": "ISTM", "type": "ROLE", "status": "UNVERIFIED", "updatedAt": 0 } }, { "competencyDetails": [], "roleDetails": { "archivedAt": 0, "archived": false, "addedAt": 0, "updatedBy": null, "childNodes": [{ "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "To look after smooth functioning of e-office", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0122", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "moloy.istm@gmail.com", "description": "To attend meetings and note important points in NCCSCB", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "MOLOY SANYAL", "submittedFromName": null, "name": "", "id": "AID0123", "submittedToId": "aab8fe35-a892-4621-b314-606d2a81b6d4", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "To ensure implementation of e-office modules", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0124", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "To communicate any issues and extension of contract of support personnel", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0125", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "To prepare reports and presentation in development of NCCSCB", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0126", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }], "name": "Project Associate", "description": "Looks after any project assigned to him", "id": "RID0208", "source": "ISTM", "type": "ROLE", "status": "UNVERIFIED", "updatedAt": 0 } }, { "competencyDetails": [{ "level": "Level 1", "children": null, "name": "Subject matter expertise", "description": "iiii", "id": "CID0852", "source": "WAT", "additionalProperties": { "competencyType": "Functional", "competencyArea": "" }, "type": "COMPETENCY", "status": "UNVERIFIED" }], "roleDetails": { "archivedAt": 0, "archived": false, "addedAt": 0, "updatedBy": null, "childNodes": [{ "submittedFromId": null, "level": null, "submittedToEmail": "shefali.saraf@nic.in", "description": "Create workflow on Sparrow and generate APAR", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0130", "submittedToId": "c74a90a2-cfd0-424a-ab65-5ac61e4b0b64", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "Verifying the information produced by employee for Pension", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0131", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "", "description": "Assisting nodal officer in processing pension case on e-Bhavishya", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0132", "submittedToId": "", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "Draft circular to issue advertisement for Consultant or search on GeM", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0133", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }, { "submittedFromId": null, "level": null, "submittedToEmail": "sandeep.kumar130@gov.in", "description": "Addressing any grievance related to pension", "parentRole": null, "submittedFromEmail": null, "source": "WAT", "type": "ACTIVITY", "submittedToName": "SANDEEP KUMAR", "submittedFromName": null, "name": "", "id": "AID0134", "submittedToId": "14d8225d-768d-4e4c-9aff-9cf24e10a28a", "status": "UNVERIFIED" }], "name": "Subject Matter Expert", "description": "", "id": "RID0209", "source": "ISTM", "type": "ROLE", "status": "UNVERIFIED", "updatedAt": 0 } }], "positionId": "PID0108", "createdBy": "052d28b9-ec77-400c-a8c6-b16fbbc69cf3", "userPosition": "ASO (Establishment and NCCSCB)", "progress": 93, "userEmail": "nelsn187@gmail.com", "id": "4dd8c9ee-2cd6-4a39-b039-453daf62b4da", "workOrderId": "4c59b2b3-d88d-4372-99da-ffebe02739c1", "errorCount": 5, "updatedAt": 1624859153031 }, "message": "Successful", "status": "OK" } }
        // tslint:disable
        // return { data: data1.result && data1.result.data, error: null }
        return { data: data.result && data.result.data, error: null }
      }),
      catchError((err: any) => {
        return of({ data: null, error: err })
      })
    )
  }
}
