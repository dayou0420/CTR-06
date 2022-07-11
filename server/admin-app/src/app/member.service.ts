import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './member';
import { MessageService } from './message.service';
import { MEMBERS } from './mock-members';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersUrl = 'api/members';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: 社員一覧データを取得しました')
    return this.http.get<Member[]>(this.membersUrl);
  }

  getMember(id: number): Observable<Member> {
    const member = MEMBERS.find(member => member.id === id)!;
    this.messageService.add(`MessageService: 社員データ(id=${id})を取得しました`);
    return of(member);
  }

  private log(message: string) {
    this.messageService.add(`MemberService: ${message}`);
  }
}
