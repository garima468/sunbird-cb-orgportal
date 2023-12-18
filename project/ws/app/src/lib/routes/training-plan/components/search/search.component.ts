import { Component, EventEmitter, Input, Inject, Output, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DOCUMENT } from '@angular/common'
import { TrainingPlanService } from './../../services/traininig-plan.service'
import { TrainingPlanDataSharingService } from './../../services/training-plan-data-share.service'
/* tslint:disable */
import _ from 'lodash'
@Component({
  selector: 'ws-app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() categoryData: any = []
  @Input() from: any = '';
  @Output() handleApiData = new EventEmitter();
  filterVisibilityFlag = false
  constructor(@Inject(DOCUMENT) private document: Document,
    private trainingPlanService: TrainingPlanService,
    private route: ActivatedRoute,
    private trainingPlanDataSharingService: TrainingPlanDataSharingService,
  ) { }

  ngOnInit() {
    // this.handleCategorySelection('');
  }

  ngOnChanges() {
    // this.handleCategorySelection('');
  }

  openFilter() {
    this.filterVisibilityFlag = true
    if (this.document.getElementById('top-nav-bar')) {
      const ele: any = this.document.getElementById('top-nav-bar')
      ele.style.zIndex = '1'
    }

  }

  hideFilter(event: any) {
    this.filterVisibilityFlag = event
    if (this.document.getElementById('top-nav-bar')) {
      const ele: any = this.document.getElementById('top-nav-bar')
      ele.style.zIndex = '1000'
    }
  }

  handleCategorySelection(event: any) {
    switch (this.from) {
      case 'content':
        event = !event ? 'Course' : event
        this.getContent(event)
        break
      case 'assignee':
        event = !event ? 'Designation' : event
        if (event === 'Designation') {
          this.getDesignations(event)
        } else if (event === 'Custom Users') {
          this.getCustomUsers(event)
        } else if (event === 'All Users') {
          this.getAllUsers(event)
        }
        break
    }
  }

  getContent(contentType: any) {
    if (contentType) {
      if(contentType === 'Moderated Course') {
        this.trainingPlanDataSharingService.moderatedCourseSelectStatus.next(true);
      }
      const filterObj = {
        "request": {
          "secureSettings": contentType === 'Moderated Course' ? true : false, // for moderated course
          "filters": {
            "primaryCategory": [contentType === 'Moderated Course' ? 'Course' : contentType],
          },
          "offset": 0,
          "limit": 20,
          "query": "",
          "sort_by": { "lastUpdatedOn": "desc" },
          "fields": ["name", "appIcon", "instructions", "description", "purpose", "mimeType",
            "gradeLevel", "identifier", "medium", "pkgVersion", "board", "subject", "resourceType",
            "primaryCategory", "contentType", "channel", "organisation", "trackable", "license", "posterImage",
            "idealScreenSize", "learningMode", "creatorLogo", "duration", "programDuration", "version", "avgRating", "competencies_v5"]
        }, "query": ""
      }
      this.trainingPlanService.getAllContent(filterObj).subscribe((res: any) => {

        // if(this.trainingPlanDataSharingService.trainingPlanContentData &&
        //    this.trainingPlanDataSharingService.trainingPlanContentData['data'] &&
        //    this.trainingPlanDataSharingService.trainingPlanContentData['data']['content'] &&
        //    this.trainingPlanDataSharingService.trainingPlanContentData['data']['content'].length
        //   ) {
        //     res && res.content.map((sitem:any)=> {
        //       sitem
        //     })
        // }

        this.trainingPlanDataSharingService.trainingPlanContentData = { category: contentType, data: res }
        this.handleApiData.emit(true)
      })
    }

  }

  getCustomUsers(event: any) {
    const rootOrgId = _.get(this.route.snapshot.parent, 'data.configService.unMappedUser.rootOrg.rootOrgId')
    const filterObj = {
      request: {
        query: '',
        filters: {
          rootOrgId,
          status: 1,
        },
        limit: 100,
        offset: 0,
      },
    }
    this.trainingPlanService.getCustomUsers(filterObj).subscribe((res: any) => {
      this.trainingPlanDataSharingService.trainingPlanAssigneeData = { category: event, data: res.content }
      this.handleApiData.emit(true)
    })
  }

  getAllUsers(event: any) {
    this.trainingPlanDataSharingService.trainingPlanAssigneeData = { category: event, data: [] }
    this.handleApiData.emit(true)
  }

  getDesignations(event: any) {
    this.trainingPlanService.getDesignations().subscribe((res: any) => {
      console.log('res', res)
      this.trainingPlanDataSharingService.trainingPlanAssigneeData = { category: event, data: res.result.response.content }
      this.handleApiData.emit(true)
    })
  }



}
