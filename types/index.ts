import { type ReactNode } from 'react';

export interface IGlobalProps {
  readonly children: ReactNode;
  readonly className: string;
}

export interface IChildrenProps {
  readonly children: ReactNode
}

export interface IClassNameProps {
  readonly className: string;
}

export interface IMetadataProps {
  readonly metadata: {
    readonly title: string
  }
}