import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Host, Review, HostService } from '../../services/host-service';

@Component({
  selector: 'auction-product-page',
  styles: ['auction-stars.large {font-size: 24px;}'],
  templateUrl: 'app/components/host-detail/host-detail.html'
})
export default class HostDetailComponent implements OnInit {
  hostId: number;
  host: Host;
  reviews: Review[];

  newComment: string;
  newRating: number;

  isReviewHidden: boolean = true;

  constructor(private hostService: HostService, route: ActivatedRoute) {
    this.hostId = parseInt(route.snapshot.params['hostId']);
  }

  ngOnInit() {
    this.host = this.hostService.getHostById(this.hostId);
    this.reviews = this.hostService.getReviewsForHost(this.host.id);
  }

  addReview() {
    let review = new Review(0, this.host.id, new Date(), 'Anonymous',
        this.newRating, this.newComment);
    this.reviews = [...this.reviews, review];
    this.host.rating = this.averageRating(this.reviews);

    this.resetForm();
  }

  averageRating(reviews: Review[]) {
    let sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }
}
