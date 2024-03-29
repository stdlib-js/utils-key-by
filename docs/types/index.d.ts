/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Object key.
*/
type Key = string | symbol | number;

/**
* Function which returns a key for each collection element.
*
* @param value - collection value
*/
type Unary<T, V> = ( this: V, value: T ) => Key;

/**
* Function which returns a key for each collection element.
*
* @param value - collection value
* @param index - collection index
*/
type Binary<T, V> = ( this: V, value: T, index: number ) => Key;

/**
* Function which returns a key for each collection element.
*
* @param value - collection value
* @param index - collection index
*/
type Callback<T, V> = Unary<T, V> | Binary<T, V>;

/**
* Converts a collection to an object whose keys are determined by a provided function and whose values are the collection values.
*
* ## Notes
*
* -   When invoked, the input function is provided two arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*
* -   If more than one element in a collection resolves to the same key, the key value is the collection element which last resolved to the key.
*
* -   Object values are shallow copies.
*
* @param collection - input collection
* @param fcn - function to invoke
* @param thisArg - execution context
* @returns output object
*
* @example
* function toKey( value, index ) {
*     console.log( '%d: %s', index, JSON.stringify( value ) );
*     return value.name;
* }
*
* var collection = [
*     { 'name': 'beep', 'a': 1 },
*     { 'name': 'boop', 'b': 2 }
* ];
*
* var obj = keyBy( collection, toKey );
* // returns { 'beep': { 'name': 'beep', 'a': 1 }, 'boop': { 'name': 'boop', 'b': 2 } }
*/
declare function keyBy<T = unknown, V = unknown>( collection: Collection<T>, fcn: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Record<Key, T>;


// EXPORTS //

export = keyBy;
