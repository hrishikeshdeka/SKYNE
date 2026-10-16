import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, OnDestroy {
  @ViewChild('menuDialog')
  private menuDialog!: ElementRef<HTMLDialogElement>;

  @ViewChild('searchDialog')
  private searchDialog!: ElementRef<HTMLDialogElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private timer?: ReturnType<typeof setInterval>;
  private activeDialog?: HTMLDialogElement;
  private previousOverflow = '';

  readonly announcementIndex = signal(0);
  readonly activePanel = signal<'menu' | 'search' | null>(null);

  readonly announcements = [
    'Save 30% on Volume Collection',
    '10% OFF WITH CODE STIX10',
    'Loved by 900+ ambitious minds',
  ];

  get announcement(): string {
    return this.announcements[this.announcementIndex()];
  }

  ngOnInit(): void {
    this.startRotation();
  }

  previousAnnouncement(): void {
    this.changeAnnouncement(-1);
  }

  nextAnnouncement(): void {
    this.changeAnnouncement(1);
  }

  private changeAnnouncement(direction: number): void {
    this.announcementIndex.update(
      index =>
        (index + direction + this.announcements.length) %
        this.announcements.length,
    );
  }

  startRotation(): void {
    this.pauseRotation();

    if (
      !isPlatformBrowser(this.platformId) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    this.timer = setInterval(() => this.nextAnnouncement(), 5000);
  }

  pauseRotation(): void {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  openPanel(panel: 'menu' | 'search'): void {
    if (this.activeDialog) return;

    const dialog =
      panel === 'menu'
        ? this.menuDialog.nativeElement
        : this.searchDialog.nativeElement;

    this.previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    this.activeDialog = dialog;
    this.activePanel.set(panel);
    this.pauseRotation();

    dialog.showModal();
  }

  closePanel(): void {
    this.activeDialog?.close();
  }

  onDialogClosed(): void {
    document.body.style.overflow = this.previousOverflow;
    this.activeDialog = undefined;
    this.activePanel.set(null);
    this.startRotation();
  }

  closeOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closePanel();
    }
  }

  ngOnDestroy(): void {
    this.pauseRotation();

    if (isPlatformBrowser(this.platformId) && this.activeDialog) {
      document.body.style.overflow = this.previousOverflow;
      this.activeDialog.close();
    }
  }
}
