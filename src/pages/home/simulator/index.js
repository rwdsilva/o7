import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  InputValue,
  BoxRange,
  Range,
  Group,
  Plot,
  Title,
} from "./styled";
import Button from "../../../components/button";
import { requestForm } from "../../../redux/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Simulator = () => {
  const [simulator, setSimulator] = useState({ value: 10000, plots: 24 });
  const listPlots = [6, 12, 24, 36, 48];
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const juros = simulator.plots * 0.0078;
    const plot = simulator.value / simulator.plots;
    const plotJuros = plot * juros + plot;
    const total = plotJuros * simulator.plots;
    setSimulator({
      ...simulator,
      plot: Math.round(plotJuros * 100) / 100,
      total: Math.round(total * 100) / 100,
    });
  }, [simulator.value, simulator.plots]);
  return (
    <Container>
      <Box>
        <Title>1. De quanto você precisa?</Title>
        <BoxRange>
          <h5>
            Valor selecionado: <span>R$ {simulator.value}</span>
          </h5>
          <Range
            type="range"
            value={simulator.value}
            step="500"
            min="5000"
            max="30000"
            onChange={(e) =>
              setSimulator({ ...simulator, value: parseInt(e.target.value) })
            }
          />
          <Group>
            <p>R$ 5.000,00</p>
            <p>R$ 30.000,00</p>
          </Group>
        </BoxRange>
      </Box>
      <Title>2. Em quantas vezes?</Title>

      <BoxRange plots>
        {listPlots.map((i) => (
          <Plot
            selected={i === simulator.plots}
            onClick={() => setSimulator({ ...simulator, plots: i })}
          >
            {i}X
          </Plot>
        ))}
      </BoxRange>
      <Title resume>
        Sua parcela mensal será de <span>R$ {simulator.plot}</span>{" "}
      </Title>
      <Button
        text="Solicitar agora"
        onClick={() => {
          dispatch(requestForm(simulator));
          history.push("/register");
        }}
        center
        secundary
      />
    </Container>
  );
};

export default Simulator;
