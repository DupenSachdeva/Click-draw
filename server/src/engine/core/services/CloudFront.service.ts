export class CloudFrontService {
  private _cf_domain = 'https://d29x3s9dal9y6h.cloudfront.net/';

  get_cf_image_url({ imageKey }: { imageKey: string }) {
    return this._cf_domain + imageKey;
  }
}
