import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateWorkallocationComponent } from './routes/create-workallocation/create-workallocation.component'
import { RouterModule } from '@angular/router'
import { WorkallocationV2RoutingModule } from './workallocation-v2-routing.module'
import { BreadcrumbsOrgModule, ScrollspyLeftMenuModule, UIORGTableModule } from '@sunbird-cb/collection'
import {
  MatSidenavModule, MatGridListModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatButtonModule, MatRadioModule, MatDialogModule, MatSelectModule, MatProgressSpinnerModule,
  MatPaginatorModule, MatTableModule, MatAutocompleteModule,
} from '@angular/material'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDividerModule } from '@angular/material/divider'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { WidgetResolverModule } from '@sunbird-cb/resolver'
import { ExportAsModule } from 'ngx-export-as'
import { MatMenuModule } from '@angular/material/menu'
import { MatTabsModule } from '@angular/material/tabs'
import { WorkallocationV2HomeComponent } from './routes/workallocation-v2-home/workallocation-v2-home.component'
import { OfficerComponent } from './components/officer/officer.component'
import { AutocompleteModule } from './components/autocomplete/autocomplete.module'
import { ActivityLabelsModule } from './components/activity-labels/activity-labels.module'
import { WINDOW_PROVIDERS } from './services/window.service'
import { AssistantMessageCardComponent } from './components/assistant-message-card/assistant-message-card.component'
import { AssistantContentCardComponent } from './components/assistant-content-card/assistant-content-card.component'
import { WatStoreService } from './services/wat.store.service'
import { CompetencyLabelsModule } from './components/competency-labels/competency-labels.module'
import { ComponentSharedModule } from './components/component-shared.module'
import { CompDetailsComponent } from './components/comp-details/comp-details.component'
import { DraftAllocationsComponent } from './routes/draft-allocations/draft-allocations.component'
import { PublishedAllocationsComponent } from './routes/published-allocations/published-allocations.component'

@NgModule({
  declarations: [
    CreateWorkallocationComponent,
    WorkallocationV2HomeComponent,
    OfficerComponent,
    AssistantMessageCardComponent,
    AssistantContentCardComponent,
    CompDetailsComponent,
    DraftAllocationsComponent,
    PublishedAllocationsComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule, WorkallocationV2RoutingModule, BreadcrumbsOrgModule,
    ActivityLabelsModule, CompetencyLabelsModule, RouterModule, MatSidenavModule, MatListModule,
    ScrollspyLeftMenuModule, MatCardModule, FormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatGridListModule,
    MatRadioModule, MatDialogModule, MatSelectModule, MatProgressSpinnerModule,
    MatExpansionModule, MatDividerModule, MatPaginatorModule, MatTableModule, WidgetResolverModule,
    UIORGTableModule, ExportAsModule, MatMenuModule, MatTabsModule, MatProgressSpinnerModule, MatAutocompleteModule,
    AutocompleteModule, ComponentSharedModule,
  ],
  entryComponents: [
    // AllocationActionsComponent,
  ],
  providers: [WINDOW_PROVIDERS, WatStoreService],
  // exports: [DownloadAllocationComponent],
})
export class WorkallocationV2Module { }
