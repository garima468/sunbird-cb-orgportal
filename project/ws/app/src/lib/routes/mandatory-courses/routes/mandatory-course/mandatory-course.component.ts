import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NsMandatoryCourse } from '../../models/mandatory-course.model'
import { MatDialog } from '@angular/material'
import { AddBatchDialougeComponent } from '../../components/add-batch-dialouge/add-batch-dialouge.component'
import { NsContent } from '@sunbird-cb/collection'
import { MandatoryCourseService } from '../../services/mandatory-course.service'

@Component({
  selector: 'ws-app-mandatory-course-home',
  templateUrl: './mandatory-course.component.html',
  styleUrls: ['./mandatory-course.component.scss'],
  /* tslint:disable */
  // host: { class: 'flex flex-1' },
  /* tslint:enable */
})
export class MandatoryCourseComponent implements OnInit {

  currentCourseId!: string
  searchResults: any = []
  currentFilter = 'meta-data'
  content: NsContent.IContent | null = null
  bdtitles: any
  currentBread: any
  noDataConfig: NsMandatoryCourse.IEmptyDataDisplay = {
    image: 'assets/images/banners/no_data.svg',
    heading: 'No course collections',
    description: 'Create an outstanding collection of courses by adding courses.',
    btnRequired: true,
    btnLink: 'course-list',
    btnText: 'Add Courses',
  }
  noBatchDataConfig: NsMandatoryCourse.IEmptyDataDisplay = {
    image: 'assets/images/banners/no_data.svg',
    heading: `No batche's created yet`,
    description: 'Create a batch to distribute courses.',
    btnRequired: true,
    btnLink: 'none',
    btnText: 'Create a batch',
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private mandatoryCourseService: MandatoryCourseService
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.currentCourseId = params['doId']
      this.noDataConfig.btnLink = `/app/mandatory-courses/${this.currentCourseId}/choose-courses`
    })
    // this.getSearchedData()
    this.updateBreadcrumb()
  }

  filter(data: any) {
    if (data === 'course-list') {
      this.currentFilter = 'course-list'
    } else if (data === 'batch-list') {
      this.currentFilter = 'batch-list'
    } else if (data === 'meta-data') {
      this.currentFilter = 'meta-data'
    }
  }

  openCreateBatchDialog() {
    this.dialog.open(AddBatchDialougeComponent, {
      width: 'auto',

      // panelClass: 'custom-dialog-container',
    })
  }
  updateBreadcrumb() {
    // console.log(this.route.snapshot.params.doId)
    // this.mandatoryCourseService.getEditContent(this.activatedRoute.snapshot.params.doId).subscribe((data: any) => {
    this.mandatoryCourseService.getfolderData().subscribe(data => {
      this.bdtitles = [{ title: 'Folders', url: '/app/home/mandatory-courses' }]
      this.bdtitles.push({ title: data.name, url: `/app/mandatory-courses/${data.identifier}` })
    })

    // })
  }
  // getSearchedData() {
  //   const queryparam = {
  //     request: {
  //       filters: {
  //         contentType: ['Course'],
  //         primaryCategory: ['Mandatory Course Goal'],
  //         mimeType: [],
  //         source: [],
  //         mediaType: [],
  //         status: ['Draft'],
  //         'competencies_v3.name': [],
  //         topics: [],
  //       },
  //       query: '',
  //       sort_by: { lastUpdatedOn: 'desc' },
  //       fields: [],
  //       facets: ['primaryCategory'],
  //       limit: 100,
  //       offset: 0,
  //       fuzzy: true,
  //     },
  //   }
  //   this.mandatoryCourseSvc.fetchSearchData(queryparam).subscribe((response: any) => {
  //     this.searchResults = response.result.content
  //   })
  // }

}
