import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { GetUserProfileResponseInterface } from 'src/app/userProfile/types/getUserProfileRespons.interface';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<ProfileInterface> {
    const urlApi = `https://api.realworld.io/api/profiles/${slug}`;

    return this.http
      .get(urlApi)
      .pipe(
        map((response: GetUserProfileResponseInterface) => response.profile)
      );
  }
}
