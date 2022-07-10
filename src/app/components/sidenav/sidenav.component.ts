import { Component, OnInit } from '@angular/core';

interface navLinks {
  title: string;
  icon?: string;
  href?: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navLinks: navLinks[] = [
    {
      title: 'Costumers',
      href: './costumers',
      icon: 'bi bi-briefcase-fill',
    },
    {
      title: 'Contacts',
      href: './contacts',
      icon: 'bi bi-journal',
    },
    {
      title: 'Leads',
      href: './leads',
      icon: 'bi bi-person-bounding-box',
    },
    {
      title: 'Reports',
      href: './reports',
      icon: 'bi bi-file-earmark-bar-graph',
    },
    {
      title: 'Integrations',
      href: './integrations',
      icon: 'bi bi-layers-fill',
    },
    {
      title: 'Year-end Sale',
      href: './yearendsale',
      icon: 'bi bi-emoji-sunglasses-fill',
    },
    {
      title: 'HTTP',
      href: './http',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
