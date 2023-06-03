import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** Boolean expression comparing fields on type "JSON" */
export type JsonFilter = {
  eq?: InputMaybe<Scalars['JSON']>;
  neq?: InputMaybe<Scalars['JSON']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the collection */
  deleteFromlistsCollection: ListsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromlists_on_usersCollection: Lists_On_UsersDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromsubtasksCollection: SubtasksDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromtasksCollection: TasksDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromtasks_on_usersCollection: Tasks_On_UsersDeleteResponse;
  /** Adds one or more `listsInsertResponse` records to the collection */
  insertIntolistsCollection?: Maybe<ListsInsertResponse>;
  /** Adds one or more `lists_on_usersInsertResponse` records to the collection */
  insertIntolists_on_usersCollection?: Maybe<Lists_On_UsersInsertResponse>;
  /** Adds one or more `subtasksInsertResponse` records to the collection */
  insertIntosubtasksCollection?: Maybe<SubtasksInsertResponse>;
  /** Adds one or more `tasksInsertResponse` records to the collection */
  insertIntotasksCollection?: Maybe<TasksInsertResponse>;
  /** Adds one or more `tasks_on_usersInsertResponse` records to the collection */
  insertIntotasks_on_usersCollection?: Maybe<Tasks_On_UsersInsertResponse>;
  /** Updates zero or more records in the collection */
  updatelistsCollection: ListsUpdateResponse;
  /** Updates zero or more records in the collection */
  updatelists_on_usersCollection: Lists_On_UsersUpdateResponse;
  /** Updates zero or more records in the collection */
  updatesubtasksCollection: SubtasksUpdateResponse;
  /** Updates zero or more records in the collection */
  updatetasksCollection: TasksUpdateResponse;
  /** Updates zero or more records in the collection */
  updatetasks_on_usersCollection: Tasks_On_UsersUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromlistsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ListsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromlists_On_UsersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Lists_On_UsersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromsubtasksCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<SubtasksFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtasksCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TasksFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtasks_On_UsersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Tasks_On_UsersFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntolistsCollectionArgs = {
  objects: Array<ListsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntolists_On_UsersCollectionArgs = {
  objects: Array<Lists_On_UsersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntosubtasksCollectionArgs = {
  objects: Array<SubtasksInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotasksCollectionArgs = {
  objects: Array<TasksInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotasks_On_UsersCollectionArgs = {
  objects: Array<Tasks_On_UsersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatelistsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ListsFilter>;
  set: ListsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatelists_On_UsersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Lists_On_UsersFilter>;
  set: Lists_On_UsersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatesubtasksCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<SubtasksFilter>;
  set: SubtasksUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetasksCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TasksFilter>;
  set: TasksUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetasks_On_UsersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Tasks_On_UsersFilter>;
  set: Tasks_On_UsersUpdateInput;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  AscNullsFirst = 'AscNullsFirst',
  AscNullsLast = 'AscNullsLast',
  DescNullsFirst = 'DescNullsFirst',
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `lists` */
  listsCollection?: Maybe<ListsConnection>;
  /** A pagable collection of type `lists_on_users` */
  lists_on_usersCollection?: Maybe<Lists_On_UsersConnection>;
  /** A pagable collection of type `subtasks` */
  subtasksCollection?: Maybe<SubtasksConnection>;
  /** A pagable collection of type `tasks` */
  tasksCollection?: Maybe<TasksConnection>;
  /** A pagable collection of type `tasks_on_users` */
  tasks_on_usersCollection?: Maybe<Tasks_On_UsersConnection>;
};


/** The root type for querying data */
export type QueryListsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ListsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ListsOrderBy>>;
};


/** The root type for querying data */
export type QueryLists_On_UsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Lists_On_UsersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Lists_On_UsersOrderBy>>;
};


/** The root type for querying data */
export type QuerySubtasksCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<SubtasksFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SubtasksOrderBy>>;
};


/** The root type for querying data */
export type QueryTasksCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<TasksFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};


/** The root type for querying data */
export type QueryTasks_On_UsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Tasks_On_UsersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Tasks_On_UsersOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type Lists = {
  __typename?: 'lists';
  id: Scalars['UUID'];
  lists_on_usersCollection?: Maybe<Lists_On_UsersConnection>;
  title: Scalars['String'];
};


export type ListsLists_On_UsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Lists_On_UsersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Lists_On_UsersOrderBy>>;
};

export type ListsConnection = {
  __typename?: 'listsConnection';
  edges: Array<ListsEdge>;
  pageInfo: PageInfo;
};

export type ListsDeleteResponse = {
  __typename?: 'listsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Lists>;
};

export type ListsEdge = {
  __typename?: 'listsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Lists>;
};

export type ListsFilter = {
  id?: InputMaybe<UuidFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ListsInsertInput = {
  id?: InputMaybe<Scalars['UUID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ListsInsertResponse = {
  __typename?: 'listsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Lists>;
};

export type ListsOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type ListsUpdateInput = {
  id?: InputMaybe<Scalars['UUID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ListsUpdateResponse = {
  __typename?: 'listsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Lists>;
};

export type Lists_On_Users = {
  __typename?: 'lists_on_users';
  created_at?: Maybe<Scalars['Datetime']>;
  list_id: Scalars['UUID'];
  lists?: Maybe<Lists>;
  updated_at?: Maybe<Scalars['Datetime']>;
  user_id: Scalars['UUID'];
};

export type Lists_On_UsersConnection = {
  __typename?: 'lists_on_usersConnection';
  edges: Array<Lists_On_UsersEdge>;
  pageInfo: PageInfo;
};

export type Lists_On_UsersDeleteResponse = {
  __typename?: 'lists_on_usersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Lists_On_Users>;
};

export type Lists_On_UsersEdge = {
  __typename?: 'lists_on_usersEdge';
  cursor: Scalars['String'];
  node?: Maybe<Lists_On_Users>;
};

export type Lists_On_UsersFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  list_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Lists_On_UsersInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  list_id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

export type Lists_On_UsersInsertResponse = {
  __typename?: 'lists_on_usersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Lists_On_Users>;
};

export type Lists_On_UsersOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  list_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Lists_On_UsersUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  list_id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

export type Lists_On_UsersUpdateResponse = {
  __typename?: 'lists_on_usersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Lists_On_Users>;
};

export type Subtasks = {
  __typename?: 'subtasks';
  created_at: Scalars['Datetime'];
  id: Scalars['UUID'];
  task_id: Scalars['UUID'];
  tasks?: Maybe<Tasks>;
};

export type SubtasksConnection = {
  __typename?: 'subtasksConnection';
  edges: Array<SubtasksEdge>;
  pageInfo: PageInfo;
};

export type SubtasksDeleteResponse = {
  __typename?: 'subtasksDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Subtasks>;
};

export type SubtasksEdge = {
  __typename?: 'subtasksEdge';
  cursor: Scalars['String'];
  node?: Maybe<Subtasks>;
};

export type SubtasksFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  task_id?: InputMaybe<UuidFilter>;
};

export type SubtasksInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  task_id?: InputMaybe<Scalars['UUID']>;
};

export type SubtasksInsertResponse = {
  __typename?: 'subtasksInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Subtasks>;
};

export type SubtasksOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  task_id?: InputMaybe<OrderByDirection>;
};

export type SubtasksUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  task_id?: InputMaybe<Scalars['UUID']>;
};

export type SubtasksUpdateResponse = {
  __typename?: 'subtasksUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Subtasks>;
};

export type Tasks = {
  __typename?: 'tasks';
  complete: Scalars['Boolean'];
  created_at: Scalars['Datetime'];
  id: Scalars['UUID'];
  started: Scalars['Boolean'];
  subtasksCollection?: Maybe<SubtasksConnection>;
  summary?: Maybe<Scalars['String']>;
  tasks_on_usersCollection?: Maybe<Tasks_On_UsersConnection>;
};


export type TasksSubtasksCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<SubtasksFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SubtasksOrderBy>>;
};


export type TasksTasks_On_UsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Tasks_On_UsersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Tasks_On_UsersOrderBy>>;
};

export type TasksConnection = {
  __typename?: 'tasksConnection';
  edges: Array<TasksEdge>;
  pageInfo: PageInfo;
};

export type TasksDeleteResponse = {
  __typename?: 'tasksDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Tasks>;
};

export type TasksEdge = {
  __typename?: 'tasksEdge';
  cursor: Scalars['String'];
  node?: Maybe<Tasks>;
};

export type TasksFilter = {
  complete?: InputMaybe<BooleanFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  started?: InputMaybe<BooleanFilter>;
  summary?: InputMaybe<StringFilter>;
};

export type TasksInsertInput = {
  complete?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  started?: InputMaybe<Scalars['Boolean']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type TasksInsertResponse = {
  __typename?: 'tasksInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Tasks>;
};

export type TasksOrderBy = {
  complete?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  started?: InputMaybe<OrderByDirection>;
  summary?: InputMaybe<OrderByDirection>;
};

export type TasksUpdateInput = {
  complete?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  started?: InputMaybe<Scalars['Boolean']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type TasksUpdateResponse = {
  __typename?: 'tasksUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Tasks>;
};

export type Tasks_On_Users = {
  __typename?: 'tasks_on_users';
  created_at?: Maybe<Scalars['Datetime']>;
  task_id: Scalars['UUID'];
  tasks?: Maybe<Tasks>;
  user_id: Scalars['UUID'];
};

export type Tasks_On_UsersConnection = {
  __typename?: 'tasks_on_usersConnection';
  edges: Array<Tasks_On_UsersEdge>;
  pageInfo: PageInfo;
};

export type Tasks_On_UsersDeleteResponse = {
  __typename?: 'tasks_on_usersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Tasks_On_Users>;
};

export type Tasks_On_UsersEdge = {
  __typename?: 'tasks_on_usersEdge';
  cursor: Scalars['String'];
  node?: Maybe<Tasks_On_Users>;
};

export type Tasks_On_UsersFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  task_id?: InputMaybe<UuidFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Tasks_On_UsersInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  task_id?: InputMaybe<Scalars['UUID']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

export type Tasks_On_UsersInsertResponse = {
  __typename?: 'tasks_on_usersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Tasks_On_Users>;
};

export type Tasks_On_UsersOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  task_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Tasks_On_UsersUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  task_id?: InputMaybe<Scalars['UUID']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

export type Tasks_On_UsersUpdateResponse = {
  __typename?: 'tasks_on_usersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Tasks_On_Users>;
};

export type ListsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListsQuery = { __typename?: 'Query', listsCollection?: { __typename?: 'listsConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean }, edges: Array<{ __typename?: 'listsEdge', node?: { __typename?: 'lists', id: any, title: string } | null }> } | null };


export const ListsDocument = gql`
    query Lists {
  listsCollection {
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        id
        title
      }
    }
  }
}
    `;

export function useListsQuery(options?: Omit<Urql.UseQueryArgs<ListsQueryVariables>, 'query'>) {
  return Urql.useQuery<ListsQuery, ListsQueryVariables>({ query: ListsDocument, ...options });
};