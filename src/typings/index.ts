export interface Muscle {
  id?: string;
  name?: string;
  description?: string;
  videos?: [ Video ];
}

export interface Video {
  id?: string;
  name?: string;
  description?: string;
  imageLink?: string;
  videoLink?: string;
}