import styled, { css } from "styled-components/native";
import MapView, { Marker } from "react-native-maps";

interface ItemProps {
  selectedItems: number[];
  itemId: number;
}

export const Container = styled.View`
  flex: 1;
  padding: 42px 32px 0 32px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: "Ubuntu_700Bold";
  margin-top: 24px;
`;

export const Description = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  margin-top: 4px;
  font-family: "Roboto_400Regular";
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapMarker = styled(Marker)`
  width: 90%;
  height: 80%;
`;

export const MapMarkerContainer = styled.View`
  width: 90px;
  height: 70px;
  background-color: #34cb79;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
`;

export const MapMarkerImage = styled.Image`
  width: 90px;
  height: 45px;
  /*resizemode: "cover";*/
`;

export const MapMarkerTitle = styled.Text`
  flex: 1;
  font-family: "Roboto_400Regular";
  color: #fff;
  font-size: 13px;
  line-height: 23px;
`;

export const ItemsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const Item = styled.TouchableOpacity<ItemProps>`
  background-color: #fff;
  border-width: 2px;
  border-color: #eee;
  height: 120px;
  width: 120px;
  border-radius: 8px;
  padding: 20px 16px 16px 16px;
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  ${(ItemProps) =>
    ItemProps.selectedItems.includes(ItemProps.itemId)
      ? css`
          border-color: #34cb79;
          border-width: 2px;
          background-color: rgba(52, 203, 121, 0.05);
        `
      : ""}
`;

export const ItemTitle = styled.Text`
  font-family: "Roboto_400Regular";
  text-align: center;
  font-size: 13px;
`;
