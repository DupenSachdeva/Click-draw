export class CloudFrontService {
  private _cf_domain = 'https://d22otbfo28bxw0.cloudfront.net/';

  get_cf_image_url({ imageKey }: { imageKey: string }) {
    return this._cf_domain + imageKey;
  }
}
