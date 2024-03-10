export interface User {
  userId: string;
  documentId: string;
  name: string;
  detail: {
    gen: number;
    major: string;
    club: string;
  };
  profile: {
    id: string;
    fileName: string;
    fileType: string;
    detail: {
      type: string;
      url: string;
    };
  };
}

export interface Document {
  id: string;
  title: string;
  type: string;
  dateTime: {
    created: string;
    updated: string;
  };
  info: [
    {
      title: string;
      content: string;
    },
  ];
  groups: [["학생", string], ["전공", string]];
  editor: {
    createdUser: {
      id: string;
      name: string;
      profile: {
        id: string;
        fileName: string;
        fileType: "image/jpeg";
        detail: {
          type: "PROFILE";
          url: string;
        };
      };
    };
    updatedUser: {
      id: string;
      name: string;
      profile: {
        id: string;
        fileName: string;
        fileType: "image/jpeg";
        detail: {
          type: "PROFILE";
          url: string;
        };
      };
    };
    canEdit: [
      {
        user: string;
        id: string;
      },
      {
        user: string;
        id: string;
      },
    ];
  };
  content: [
    // 정렬되어 반환됌
    {
      index: string;
      title: string;
      content: string;
    },
    {
      index: string;
      title: string;
      content: string;
    },
    {
      index: string;
      title: string;
      content: string;
    },
  ];
  version: number;
}
