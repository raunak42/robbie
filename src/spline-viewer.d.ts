// spline-viewer.d.ts

declare namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'loading-anim-type'?: string;
        url?: string;
      };
    }
  }