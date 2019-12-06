/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/recoveryPointsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a RecoveryPoints. */
export class RecoveryPoints {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a RecoveryPoints.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Lists the backup copies for the backed up item.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item whose backup copies are to be fetched.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecoveryPointsListResponse>
   */
  list(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, options?: Models.RecoveryPointsListOptionalParams): Promise<Models.RecoveryPointsListResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item whose backup copies are to be fetched.
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, callback: msRest.ServiceCallback<Models.RecoveryPointResourceList>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item whose backup copies are to be fetched.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, options: Models.RecoveryPointsListOptionalParams, callback: msRest.ServiceCallback<Models.RecoveryPointResourceList>): void;
  list(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, options?: Models.RecoveryPointsListOptionalParams | msRest.ServiceCallback<Models.RecoveryPointResourceList>, callback?: msRest.ServiceCallback<Models.RecoveryPointResourceList>): Promise<Models.RecoveryPointsListResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RecoveryPointsListResponse>;
  }

  /**
   * Provides the information of the backed up data identified using RecoveryPointID. This is an
   * asynchronous operation.
   * To know the status of the operation, call the GetProtectedItemOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with backed up item.
   * @param containerName Container name associated with backed up item.
   * @param protectedItemName Backed up item name whose backup data needs to be fetched.
   * @param recoveryPointId RecoveryPointID represents the backed up data to be fetched.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecoveryPointsGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, recoveryPointId: string, options?: msRest.RequestOptionsBase): Promise<Models.RecoveryPointsGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with backed up item.
   * @param containerName Container name associated with backed up item.
   * @param protectedItemName Backed up item name whose backup data needs to be fetched.
   * @param recoveryPointId RecoveryPointID represents the backed up data to be fetched.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, recoveryPointId: string, callback: msRest.ServiceCallback<Models.RecoveryPointResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with backed up item.
   * @param containerName Container name associated with backed up item.
   * @param protectedItemName Backed up item name whose backup data needs to be fetched.
   * @param recoveryPointId RecoveryPointID represents the backed up data to be fetched.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, recoveryPointId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoveryPointResource>): void;
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, recoveryPointId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecoveryPointResource>, callback?: msRest.ServiceCallback<Models.RecoveryPointResource>): Promise<Models.RecoveryPointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        recoveryPointId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RecoveryPointsGetResponse>;
  }

  /**
   * Lists the backup copies for the backed up item.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecoveryPointsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RecoveryPointsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecoveryPointResourceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoveryPointResourceList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecoveryPointResourceList>, callback?: msRest.ServiceCallback<Models.RecoveryPointResourceList>): Promise<Models.RecoveryPointsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.RecoveryPointsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.protectedItemName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPointResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.protectedItemName,
    Parameters.recoveryPointId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPointResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPointResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
